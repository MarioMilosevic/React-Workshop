import { createContext } from "react";

type CounterContextType = {
  counter: number;
  setCounter: (value: number) => void;
};

const counterCtx = createContext<CounterContextType | null>(null);

export default counterCtx;
