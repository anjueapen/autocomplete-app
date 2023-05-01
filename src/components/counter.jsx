import React from "react";

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};
