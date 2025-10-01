import { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => setCount(count - 1)}> 증가</button>
    </>
  );
}
