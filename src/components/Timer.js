import React from 'react'
import { useEffect } from 'react';
export default function Timer({ dispatch, secondsRemaining, status }) {
  const minute = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
    useEffect(() => {
      const id = setInterval(() => {
        dispatch({ type: 'tick' })
      }, 1000);
  
      return () => clearInterval(id)
    
    }, [dispatch])
  
  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}: {sec < 10 && "0"}
      {sec}
    </div>
  );
}
