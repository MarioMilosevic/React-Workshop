import React, { useState, useRef } from "react";
import MemoChild from "./components/MemoChild";
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 12, 34, 79, 0, 6, 7]);
  const [counter, setCounter] = useState<number>(0);

  console.log("app render");

  return (
    <div className="flex gap-12">
      <div className="flex gap-4">
        <button onClick={() => setCounter((prev) => (prev -= 1))}>
          Decrement
        </button>
        <p>{counter}</p>
        <button onClick={() => setCounter((prev) => (prev += 1))}>
          Increment
        </button>
      </div>
      <button onClick={() => setNumbers((prev) => [...prev, 150])}>
        ARRAY
      </button>
      <MemoChild numbers={numbers} />
    </div>
  );
};

export default App;
