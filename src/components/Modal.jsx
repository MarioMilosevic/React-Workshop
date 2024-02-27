import Button from "./Button"
const Modal = ({color}) => {
  return (
    <div className={`w-[200px] h-[200px] ${color()} mx-auto mb-4 flex items-center justify-center `}>
      <Button />
    </div>
  )
}

export default Modal
