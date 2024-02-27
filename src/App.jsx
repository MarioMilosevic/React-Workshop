import { useState } from "react";
import Modal from "./components/Modal";
import LoadButton from "./components/LoadButton";
function App() {
  const [modals, setModals] = useState([
    { color: "bg-green-400", cursor: "pointer", id: 1 },
    { color: "bg-red-400", cursor: "not-allowed", id: 2 },
  ]);
  const [loading, setLoading] = useState(true);

  const invertModal = () => {
    setTimeout(() => {
      
      const invertedModals = modals.map((modal) => {
        const color =
        modal.color === "bg-green-400" ? "bg-red-400" : "bg-green-400";
        const cursor = modal.cursor === "pointer" ? "not-allowed" : "pointer";
        return { ...modal, color: color, cursor: cursor };
      });
      setLoading((prev) => {
        prev = !prev
        console.log(prev)
      })
      setModals(invertedModals);
    }, 2000);
    };

  return (
    <>
      {modals.map((modal) => (
        <Modal
          color={modal.color}
          key={modal.id}
          cursor={modal.cursor}
        />
      ))}
      <LoadButton invertModal={invertModal}/>
    </>
  );
}

export default App;
