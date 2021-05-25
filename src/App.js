import React from "react";
import Count from "./components/Count";
import Counter from "./components/Counter";
import CounterProvider from "./components/CounterProvider";
import CountProvider from "./components/CountProvider";

function App() {
  return (
    <div className="container mt-5">
      <div className=" p-5 bg-primary mb-3 text-light">
        <h1>Counter Using Context with useReducer and useState</h1>
      </div>
      <div className="row">
        <CounterProvider>
          <Counter />
        </CounterProvider>
        <CountProvider>
          <Count />
        </CountProvider>
      </div>
    </div>
  );
}

export default App;
