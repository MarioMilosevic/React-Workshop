import React from "react";
import { useContext } from "react";
import counterCtx from "../context/counterCtx";
const GrandChild = () => {
  console.log("rerender GRANDCHILD");

  const ctx = useContext(counterCtx);
  if (!ctx) return null;

  const { counter, setCounter } = ctx;

  return (
    <div className="flex gap-8 p-4 items-center justify-center bg-slate-300 text-slate-950">
      <button
        className="border rounded-full px-4 py-2 border-black"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <h1>{counter}</h1>
      <button
        className="border rounded-full px-4 py-2 border-black"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
};

export default GrandChild;
