import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

const Count = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="card w-50 p-5">
      <div className="m-5">
        <h1>Count is : {count}</h1>
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-primary btn-block"
      >
        Count +1
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-primary btn-block"
      >
        Count -1
      </button>
    </div>
  );
};

export default Count;
