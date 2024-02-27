const Button = ({ cursor, invertIndividualModal, id }) => {
  return (
    <button
      className={`rounded-full  px-4 py-2 bg-white cursor-${cursor}`}
      onClick={() => invertIndividualModal(id)}
    >
      Click me
    </button>
  );
};

export default Button;
