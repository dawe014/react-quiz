import React from 'react'
import NextButton from './NextButton';

export default function FinishScreen({points, maxPoints}) {
  const percentage = (points / maxPoints * 100).toFixed(2);
  return (
    <>
      <div className="result">
        <p>
          You scored <strong>{points}</strong> out of {maxPoints} {percentage}
        </p>
      </div>
      <NextButton />
    </>
  );
}
