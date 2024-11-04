import React, { useState } from 'react'
import './counter.css'

export default function counter() {

    const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="add-discard">
        <button onClick={decrementCounter}>-</button>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
    </div>
  )
}
