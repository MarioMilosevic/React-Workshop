import React from "react";

const GrandChild = () => {
  return (
    <div className="flex gap-8 p-4 items-center justify-center bg-slate-300 text-slate-950">
      <button className="border rounded-full px-4 py-2 border-black">+</button>
      <button className="border rounded-full px-4 py-2 border-black">-</button>
    </div>
  );
};

export default GrandChild;
