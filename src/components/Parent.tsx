import React from "react";
import Child from "./Child";
const Parent = () => {

  console.log("rerender PARENT");

  return (
    <div className="border p-4 bg-slate-500 flex flex-col gap-4">
      Ovo je Parent komponenta
      <Child />
    </div>
  );
};

export default Parent;
