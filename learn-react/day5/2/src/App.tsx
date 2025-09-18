// // 이벤트
// // 리액트에서는 addEventListener를 거의 쓰지않음
// // 대신 tag들이 갖고있는 이벤트 속성을 이용. 모든 태그는 on으로 시작하는 속성이 있다.
// // html 문법에서와는 다르게, 함수에 소괄호를 붙여 나타내지 않는다. -> on이벤트와 상관없이 그냥 코드 실행 즉시 호출한다는 의미가 되기 때문.
// // {함수명} 이렇게만 on이벤트에 넘겨준다!

// export default function App() {
//   const handleClick = () => {
//     alert("click!");
//   };
//   return (
//     <>
//       <button onClick={handleClick}>클릭</button>  // 1번 방법
//       <button onClick={() => handleClick()}>클릭</button>  // 2번 방법
//     </>
//   );
// }
// // 함수의 매개변수를 전달해줄 필요 없을땐 -> 소괄호() 안써도 되니까 1번처럼
// // 필요할땐 -> 소괄호() 써야되니까 2번처럼 (화살표함수)

//
//

// import Button from "./components/Button";

// export default function App() {
//   const handleClick = (name: string) => {
//     alert(`${name}`);
//   };
//   return (
//     <>
//       <Button handleClick={handleClick} />
//     </>
//   );
// }

// 이벤트 객체
// : 특정 이벤트와 관련있는 정보들이 담겨겨있는 객체
export default function App() {
  const handleClick = (e: unknown, name: string) => {
    console.log(e); // 반드시 이렇게 명시적으로 전달해서 사용해라.
    console.log(event); // 사용하면 안됨
    console.log(name);
  };
  return (
    <>
      <button onClick={(e) => handleClick(e, "kim")}>click!</button>
    </>
  );
}
// 매개변수가 있어버릴땐?
// 암묵적 이벤트 객체를 명시적으로 받아서 던져주면 된다. (e) => 이렇게 명시적으로 받아서 전달해주기.
