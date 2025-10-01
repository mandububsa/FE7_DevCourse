// const [상태변수, 액션(리듀서)발생함수] =  useReducer(리듀서함수, 초깃값)
import { useReducer } from "react";

// 리듀서 함수 -> 상태 업데이트 로직이 담겨있는 함수, 반드시 한 개 이상의 리턴이 있어야 한다.
function reducer(state: number, action) {}
export default function App() {
  // countDispatch({type: 'increment'})
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button> */}

      <Count count={count} dispatch={countDispatch} />
      <Form />
    </>
  );
}

import Count from "./components/Count";
import reducer from "./reducer/countReducer";
