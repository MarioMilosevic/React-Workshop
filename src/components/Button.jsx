const Button = ({ color }) => {
  return (
    <button
      className={`rounded-full absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] px-4 py-2 ${color}`}
    >
      Click me
    </button>
  );
};

export default Button;
