import { useState } from "react";
import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";

// 상태 끌어올리기 (State Lifting)
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount((count) => count - 1);

  return (
    <>
      <Count
        count={count}
        increment={increment}
        reset={reset}
        decrement={decrement}
      />
      <CountOutSide count={count} />
    </>
  );
}
