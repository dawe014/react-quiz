import React from 'react'

export default function FinishScreen({points, maxPoints, dispatch}) {
  const percentage = (points / maxPoints * 100).toFixed(2);
  return (
    <>
      <div className="result">
        <p>
          You scored <strong>{points}</strong> out of {maxPoints} {percentage}
        </p>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
