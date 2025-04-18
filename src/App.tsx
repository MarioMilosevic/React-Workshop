import React from "react";
import Grandparent from "./components/Grandparent";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState<number>(0);

  return <Grandparent />;
};

export default App;
