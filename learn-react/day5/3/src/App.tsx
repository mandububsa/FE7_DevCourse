// // JS 변수 선언 키워드 - let, const, var
// // React 변수 선언 키워드 - useState()

// export default function App() {
//   let count = 0;
//   return (
//     <>
//       <h1>count: {count}</h1>
//       <button
//         onClick={() => {
//           count += 1;
//           console.log(count);
//         }}
//       >
//         증가
//       </button>
//     </>
//   );
// }

//

// import { useState } from "react";

// export default function App() {
//   // 상태업뎃함수명의 관례 = set***
//   // "set상태변수"
//   const [count, setCount] = useState(0); // [상태변수, 상태업데이트함수]
//   return (
//     <>
//       <h1>count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>증가</button>
//     </>
//   );
// }

//

// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0); // useState<number>(0)
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(10)}>클릭</button>
//     </>
//   );
// }

/*
===============================================
*/

// // 상태 업데이트함수 활용법
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(10); // setCount(값)
//     setCount((count) => count + 1) // setCount(콜백함수)
//      // 관례상 현재상태값의 변수랑 같은 이름으로 매개변수 주기
//   }; 
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(10)}>클릭</button>
//     </>
//   );
// }
// // 기존값을 활용해야되면 => 콜백함수 형태 사용 (항상 최신값 보장o)
// // 아니라면 => 값 형태 사용 (항상 최신값 보장x)

//
//
//

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
const handleCounter    setCount((count) => count + 1) // setCount(콜백함수)
     // 관례상 현재상태값의 변수랑 같은 이름으로 매개변수 주기
  };
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}