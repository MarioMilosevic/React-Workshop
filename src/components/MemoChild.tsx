import React from "react";

type MemoChildProps = {
  numbers: number[];
};

const MemoChild = React.memo(({ numbers }: MemoChildProps) => {
  console.log("memo child render");
  return (
    <ul className="flex gap-4">
      {numbers.map((num) => (
        <li key={num}>{num * 2}</li>
      ))}
    </ul>
  );
});

export default MemoChild;
