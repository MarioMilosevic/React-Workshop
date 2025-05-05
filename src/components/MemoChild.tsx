import React, { useMemo } from "react";

type MemoChildProps = {
  numbers: number[];
  message: string;
};

const MemoChild = React.memo(({ numbers, message }: MemoChildProps) => {
  console.log("memo child render");

  const total = useMemo(() => {
    console.log("desio se reduce");
    return numbers.reduce((acc, value) => acc + value, 0);
  }, [numbers]);

  return (
    <div className="flex gap-4">
      <p>Ovo je total {total}</p>
      <p>Ovo je poruka {message}</p>
    </div>
  );
});

export default MemoChild;
