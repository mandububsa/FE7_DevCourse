import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";

export default function CountButtons() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>증가</button>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(setIsLight())}>light</button>
      <button onClick={() => dispatch(setIsDark())}>dark</button>
    </>
  );
}
// Redux Toolkit은 컴포넌트 최적화가 자동으로 됨 ㅋㅋ
