import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import { useEffect, useReducer } from "react";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "active":
      return {
        ...state,
        status: "active",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "inc":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status:'finished',
      };
    case "restart":
      return {
        ...state,
        status: 'active',
        index: 0,
        answer: null,
        points:0
      };
    default:
      throw new Error("Action unknown");
  }
}
function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [questions, status] = state;
  const noquest = questions.length;
  console.log(noquest);
  const maxPoints =questions.reduce((prev,cur)=>prev+cur.points,0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        if (data) dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchData();
  }, []);
  // console.log(state.questions[0].question);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen noquest={noquest} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress index={index} noquest={noquest} points={ points} maxPoints={maxPoints} answer={answer} />
          <Question
            dispatch={dispatch}
            answer={answer}
            question={questions[index]}
          />
            <NextButton dispatch={dispatch} answer={answer} index={index} status={status} />
            
            </>
        )}
        {status === 'finished' &&<> <FinishScreen points={points} maxPoints={maxPoints} />
        <NextButton dispatch={dispatch} answer={answer} index={index} status={status} /></>}
      </Main>
    </div>
  );
}

export default App;
