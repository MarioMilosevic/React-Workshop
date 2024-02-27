import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [button,setButton] = useState()
  const [modalColor,setModalColor] = useState()

  const buttonHandler = () => {
    console.log("proba")
  }

  const greenColor = () => {
    return "bg-green-400"
  }

  const redColor = () => {
    return "bg-red-400"
  }

  return (
   <>
    <Modal color={greenColor}/>
    <Modal color={redColor}/>
   </>
  );
}

export default App;
