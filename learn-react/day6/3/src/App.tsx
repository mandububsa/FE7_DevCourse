// useEffect 훅

import { useEffect, useState } from "react";
import Interval from "./components/Interval";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트");
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드 작성
    // console.log("App 컴포넌트 렌더링");
    return () => {
      // 컴포넌트가 삭제될 때 호출되는 함수
    };
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      {count === 0 && <Interval />}
    </>
  );
}
// 버튼 클릭할때마다 콘솔 찍힘
// => 리렌더링 된다는 것을 의미
