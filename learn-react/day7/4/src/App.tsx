import { createContext, useState } from "react";
import Page from "./components/Page";

// 1. Context API

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Page />
      </CounterContext>
    </>
  );
}
