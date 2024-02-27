import Button from "./Button";
const Modal = ({ color, cursor}) => {
  return (
    <div
      className={`w-[200px] h-[200px] ${color}  mx-auto mb-4 flex items-center justify-center `}
    >
    <Button cursor={cursor} />
    </div>
  );
};

export default Modal;
