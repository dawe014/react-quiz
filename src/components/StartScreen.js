export default function StartScreen({noquest, dispatch}){
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>{noquest} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"active"})}>Let's Start</button>
    </div>
  );
}
