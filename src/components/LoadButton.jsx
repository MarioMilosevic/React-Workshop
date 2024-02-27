const LoadButton = ({invertModal}) => {
  return (
    <div className="flex justify-center">
      <button className="text-center text-xl rounded-full bg-blue-300 py-3 px-6" onClick={invertModal}>
        Load
      </button>
    </div>
  );
};

export default LoadButton;
