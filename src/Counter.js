import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </>
  );
}
