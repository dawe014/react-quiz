import React from 'react'

export default function Progress({ index, noquest,points,maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={noquest} value={index+Number(answer!==null)}/>
      <p>
        Question <strong>{index+1}</strong>/ {noquest}
      </p>
      <p><strong>{points}</strong>/{ maxPoints}</p>
    </header>
  );
}
