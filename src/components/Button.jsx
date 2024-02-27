const Button = ({ cursor }) => {
  return (
    <button className={`rounded-full  px-4 py-2 bg-white cursor-${cursor}`}>
      Click Me
    </button>
  );
};

export default Button;
