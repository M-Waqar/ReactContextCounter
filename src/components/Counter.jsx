import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div className="card w-50 p-5">
      <div className="m-5">
        <h1>Count is : {state}</h1>
      </div>
      <button
        onClick={() => dispatch({ type: "I" })}
        className="btn btn-primary btn-block"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "D" })}
        className="btn btn-primary btn-block"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
