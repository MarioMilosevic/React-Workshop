const Button = ({ children, clickHandler, position }) => {
  console.log(position);
  return (
    <button
      onClick={clickHandler}
      className={`px-4 py-2 bg-blue-300 rounded-full mx-auto ${position}`}
    >
      {children}
    </button>
  );
};

export default Button;
