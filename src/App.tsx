import React from "react";
import Grandparent from "./components/Grandparent";
import { useState, useContext } from "react";
import counterCtx from "./context/counterCtx";

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  console.log("rerender APP");

  return (
    <counterCtx.Provider value={{ counter, setCounter }}>
      <Grandparent />
    </counterCtx.Provider>
  );
};

export default App;
