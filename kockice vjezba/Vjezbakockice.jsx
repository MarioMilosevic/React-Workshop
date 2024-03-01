import { useState } from "react";
import Modal from "./components/Modal";
import LoadButton from "./components/LoadButton";
import Button from "./components/Button";
function App() {
  const [loading, setLoading] = useState(true);

  const [color1, setColor1] = useState("bg-green-400");
  const [color2, setColor2] = useState("bg-red-400");

  const [buttonColor1, setButtonColor1] = useState("bg-red-400");
  const [buttonColor2, setButtonColor2] = useState("bg-green-400");

  const changeColors = () => {
    setColor1("bg-red-400");
    setColor2("bg-green-400");
    setButtonColor1("bg-green-400");
    setButtonColor2("bg-red-400");
    setTimeout(() => {
      setColor1("bg-green-400");
      setColor2("bg-red-400");
      setButtonColor1("bg-red-400");
      setButtonColor2("bg-green-400");
    }, 2000);
  };

  return (
    <>
      <div className="relative">
        <Modal color={color1} />
        <Button color={buttonColor1} />
      </div>
      <div className="relative">
        <Modal color={color2} />
        <Button color={buttonColor2} />
      </div>
      <LoadButton changeColors={changeColors} />
    </>
  );
}

export default App;
