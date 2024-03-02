import Button from "./Button";
import "./App.css";

function App() {
  return (
    <>
      <Button clickHandler={() => console.log("mast")} size={"sm"}  color={}/>
      <Button clickHandler={() => console.log("slast")} size={"md"} color={} />
      <Button clickHandler={() => console.log("blast")} size={"lg"} color={} />
    </>
  );
}

export default App;
