import Button from "./Button";
import "./App.css";

function App() {
  return (
    <>
      <Button clickHandler={() => console.log("mast")}  color={"red"} type={"primary"}/>
      <Button clickHandler={() => console.log("slast")} color={"red"} type={"secondary"} />
      <Button clickHandler={() => console.log("blast")} color={"red"} type={"ghost"} />
    </>
  );
}

export default App;
