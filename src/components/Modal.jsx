import Button from "./Button";
const Modal = ({ color, cursor, invertIndividualModal, id}) => {
  return (
    <div
      className={`w-[200px] h-[200px] ${color}  mx-auto mb-4 flex items-center justify-center `}
    >
    <Button cursor={cursor} invertIndividualModal={invertIndividualModal} id={id}/>
    </div>
  );
};

export default Modal;
