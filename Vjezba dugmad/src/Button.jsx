const Button = ({ clickHandler, type, color }) => {
  let button;
  if (type === "primary") {
    button = `w-24 h-12 bg-${color}-400 rounded-md text-xl hover:bg-${color}-500`;
  } else if (type === "secondary") {
    button = `w-40 h-20 bg-${color}-400 rounded-md text-2xl hover:bg-${color}-500`;
  } else if (type === "ghost") {
    button = `w-48 h-24 border border-${color}-400 text-${color}-400 text-3xl duration-200 hover:bg-${color}-400 hover:text-white`;
  }

  return (
    <button className={`${button} rounded-md`} onClick={clickHandler}>
      Save
    </button>
  );
};

export default Button;
