import { useState } from "react";
import Modal from "./components/Modal";
import LoadButton from "./components/LoadButton";
function App() {
  const [modals, setModals] = useState([
    { color: "bg-green-400", cursor: "pointer", id: 1 },
    { color: "bg-red-400", cursor: "not-allowed", id: 2 },
  ]);
  const [loading, setLoading] = useState(true);

  const invertModals = () => {
    setTimeout(() => {
      const invertedModals = modals.map((modal) => {
        const color =
          modal.color === "bg-green-400" ? "bg-red-400" : "bg-green-400";
        const cursor = modal.cursor === "pointer" ? "not-allowed" : "pointer";
        return { ...modal, color: color, cursor: cursor };
      });
      setLoading((prev) => {
        prev = !prev;
      });
      setModals(invertedModals);
    }, 2000);
  };

  const invertIndividualModal = (id) => {
    console.log(id);
    const individual = modals.map((modal) => {
      return modal.id === id
        ? {
            ...modal,
            color: `${
              modal.color === "bg-green-400" ? "bg-red-400" : "bg-green-400"
            }`,
            cursor: `${modal.cursor === "pointer" ? "not-allowed" : "pointer"}`,
          }
        : modal;
    });
    setModals(individual);
  };

  return (
    <>
      {modals.map((modal) => (
        <Modal
          color={modal.color}
          key={modal.id}
          id={modal.id}
          cursor={modal.cursor}
          invertIndividualModal={invertIndividualModal}
        />
      ))}
      <LoadButton invertModals={invertModals} />
    </>
  );
}

export default App;
