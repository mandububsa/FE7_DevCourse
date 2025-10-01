import { useCallback, useMemo, useState } from "react";
import A from "./components/A";
// React.memo -> 컴포넌트를 메모이제이션
// useCallback -> 함수를 메모이제이션
// useMemo -> 값을 메모이제이션

function heavyCalculator() {
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += i;
  }
  return result;
}
//
export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const totalSum = useMemo(() => heavyCalculator(), []);
  console.log("App Rerendring");
  return (
    <>
      <h1>App Count: {count}</h1>
      <h1>1 ~ 10억: {totalSum}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <A handleIncrement={handleIncrement} />
    </>
  );
}
