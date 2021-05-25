import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const reducer = (count, action) => {
    switch (action.type) {
      case "I":
        return count + 1;
      case "D":
        return count - 1;
      default:
        return count;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
