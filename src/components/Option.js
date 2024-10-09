import React from 'react'

export default function Option({question, dispatch, answer}) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            answer !== null &&
            (question.correctOption === index
              ? answer === index
                ? "correct answer"
                : "correct"
              : answer === index
              ? "wrong answer"
              : "wrong")
            }`}
          disabled={answer!==null}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
