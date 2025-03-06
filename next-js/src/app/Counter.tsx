"use client"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    console.log('Counter component')
  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>
      {" "}
      Clicked {counter} times
    </button>
  );
};

export default Counter;
