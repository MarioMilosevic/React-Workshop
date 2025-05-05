import React, { useState, useRef } from "react";

const App = () => {
  const [input, setInput] = useState<string>("");
  const timeoutRef = useRef(null);

  const inputHandler = (e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log("radi", e.target.value);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Input field "
        className="p-2 rounded-lg text-slate-950"
        onChange={inputHandler}
      />
    </div>
  );
};

export default App;
