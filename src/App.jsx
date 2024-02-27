import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [modals, setModals] = useState([
    { color: "bg-green-400", cursor: "pointer", id: 1 },
    { color: "bg-red-400", cursor: "not-allowed", id: 2 },
  ]);

  const invertModal = () => {
    const invertedModals = modals.map((modal) => {
      const color =
        modal.color === "bg-green-400" ? "bg-red-400" : "bg-green-400";
      const cursor = modal.cursor === "pointer" ? "not-allowed" : "pointer";
      return { ...modal, color: color, cursor: cursor };
    });
    setModals(invertedModals);
  };

  return (
    <>
      {modals.map((modal) => {
        return (
          <Modal
            color={modal.color}
            key={modal.id}
            cursor={modal.cursor}
            invertModal={invertModal}
          />
        );
      })}
    </>
  );
}

export default App;
