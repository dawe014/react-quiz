import { useState, useReducer } from "react";

function reducer(state, action) {
  // state = action
  if (action.type === "inc") return state + 1;
  if (action.type === "incstep") return state + action.payload;
  if (action.type === "dec") return state - 1;
  if (action.type === "decstep") return state - action.payload;
  if (action.type === "setCount") return action.payload;
  console.log(state, action);
  return action;
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    if (step > 1) dispatch({ type: "decstep", payload: step });
    else {
      dispatch({ type: "dec" });
    }
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    if (step > 1) dispatch({ type: "incstep", payload: step });
    else {
      dispatch({ type: "inc" });
    }
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
