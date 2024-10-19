import "./App.css";
// import Mario from "./components/Mario";
import { useState } from "react";
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrement Count
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>
      <br />
      <br />
      <br />
      <input type="text" onChange={(e) => setCount(e.target.valueAsNumber)} />
    </div>
  );
}

export default App;
