const Button = ({ clickHandler, type, color }) => {
  let button;
  if (type === "primary") {
    button = `w-16 h-8 bg-${color}-400 rounded-md text-md hover:bg-${color}-500`;
  } else if (type === "secondary") {
    button = `w-24 h-12 bg-${color}-400 rounded-md text-xl hover:bg-${color}-500`;
  } else if (type === "ghost") {
    button = `w-32 h-16 border border-${color}-400 text-${color}-400 text-3xl  hover:bg-${color}-400 hover:text-white`;
  }

  return (
    <button className={`${button} rounded-md duration-200`} onClick={clickHandler}>
      Save
    </button>
  );
};

export default Button;
