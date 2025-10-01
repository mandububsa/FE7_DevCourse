import React, { useState } from "react";
import B from "./B";

export default React.memo(function A({ count2 }: { count2: number }) {
  const [count, setCount] = useState(0);
  console.log("A Rerendring");
  return (
    <>
      <h1>A Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <B />
    </>
  );
});
