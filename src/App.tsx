import Modal from "./components/Modal";
export default function App() {
  return (
    <div>
      <Modal isOpen={true} onClose={() => console.log("nesto")}>
        Ovo je neki children
      </Modal>
    </div>
  );
}
