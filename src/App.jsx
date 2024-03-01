import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
const App = () => {
  const [color1, setColor1] = useState("bg-green-400");
  const [color2, setColor2] = useState("bg-red-400");

  const toggleColors = () => {
    setColor1("bg-red-400");
    setColor2("bg-green-400");
    setTimeout(() => {
      setColor1();
      setColor1("bg-green-400");
      setColor2("bg-red-400");
    }, 1500);
  };

  const changeFirstColor = () => {
    setColor1((prev) => {
      return prev === "bg-green-400" ? "bg-red-400" : "bg-green-400";
    });
  };

  const changeSecondColor = () => {
    setColor2((prev) => {
      return prev === "bg-green-400" ? "bg-red-400" : "bg-green-400";
    });
  };

  const positioning =
    "absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%]";
  const loadBtnPositioning =
    "absolute right-[50%] top-[95%] translate-x-[50%] translate-y-[-50%]";

  return (
    <>
      <div className="relative">
        <Modal color={color1} />
        <Button clickHandler={changeFirstColor} position={positioning}>
          Prvo dugme
        </Button>
      </div>
      <div className="relative">
        <Modal color={color2} />
        <Button clickHandler={changeSecondColor} position={positioning}>
          Drugo dugme
        </Button>
      </div>
      <Button clickHandler={toggleColors} position={loadBtnPositioning}>
        Sir masni
      </Button>
    </>
  );
};

/*{ <Button>
Masni sir
{/* da ova komponenta button renderuje children }
</Button> }*/
export default App;
