import React from 'react'

export default function NextButton({ dispatch, answer, index, status }) {
  console.log(status);
  
  if (answer === null) return
  
  if (index === 14) return (
    <div>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish Qiuz
      </button>
    </div>
  );
  if (index < 14)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "inc" })}
        >
          Next
        </button>
      </div>
    );
  
}
