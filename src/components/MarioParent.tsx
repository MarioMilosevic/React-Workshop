import React, { useState } from "react";

type MarioProps = {
  children: React.ReactNode;
};

export default function MarioParent({ children }: MarioProps) {
  const [counter, setCounter] = useState(0);
  console.log("parent rerender");
  return (
    <div className="border ">
      <h1>Ovo je parend componenta {counter}</h1>
      <button onClick={() => setCounter((prev) => (prev += 1))}>
        Increment
      </button>
      {children}
    </div>
  );
}
