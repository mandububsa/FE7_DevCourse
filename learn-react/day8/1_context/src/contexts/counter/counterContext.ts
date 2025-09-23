import { createContext } from "react";

type CounterContextType = {
  // 값 고정x
  count: number;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
});

type CounterActionContextType = {
  // 값 고정o
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const CounterActionContext = createContext<CounterActionContextType>({
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
