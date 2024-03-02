const Button = ({ size, clickHandler, color }) => {
  let buttonSize;
  if (size === "sm") {
    buttonSize = "w-[6rem] h-[6-rem]";
  } else if (size === "md") {
    buttonSize = "w-[8rem] h-[8rem]";
  } else if (size === "lg") {
    buttonSize = "w-[10rem] h-[10rem]";
  }

  return (
    <button className={`${buttonSize} `} onClick={clickHandler}>
      Dugme
    </button>
  );
};

export default Button;
