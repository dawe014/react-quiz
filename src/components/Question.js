import React from "react";
import Option from "./Option";

export default function Question({ dispatch, question,answer }) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
      
    </div>
  );
}
