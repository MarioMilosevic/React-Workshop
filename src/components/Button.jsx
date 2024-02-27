const Button = ({ cursor, invertModal }) => {
  return (
    <button className={`rounded-full  px-4 py-2 bg-white cursor-${cursor}`} onClick={invertModal}>
      Click Me
    </button>
  );
};

export default Button;
