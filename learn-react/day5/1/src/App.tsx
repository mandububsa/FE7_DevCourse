// // 요소를 반복 렌더링 하려면, 그 요소를 가공해서 가공된 값이 포함된 배열로 만들어주면 되겠구나
// // 그리고 그 배열을 표현식으로 출력하면 되겠구나
// export default function App() {
//   const items = ["Apple", "Banana", "Cherry"];
//   return (
//     <>
//       <ul>
//         {items.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// // JS에서 배운 배열 반복문은 여러개가 있지만(forEach, for of, for in, reduce ....),
// // map은 원본 배열을 가지고 새로운 배열을 반환해주기 때문에 가장 많이 사용하는 것
// // (일반적인 for문은 아예 JSX안에서 쓸수없음)

//
//

// import { useState } from "react";
// export default function App() {
//   const [items, setItems] = useState(["Apple", "Banana", "Cherry"]); // 배열 구조 분해 할당
//   const handleItemAdd = () => {
//     setItems((items) => ["New Item", ...items]);
//   };
//   return (
//     <>
//       {items.map((item) => (
//         <input key={item} placeholder={item} style={{ display: "block" }} />
//       ))}
//       <button onClick={handleItemAdd}>추가</button>
//     </>
//   );
// }
// // 리액트는 반복 렌더링으로 출력한 요소를 식별하지 못함
// // 양방향 바인딩을 채택했기 때문.
// // key값은 하나의 반복 렌더링(map) 안에서 고유한 값을 보장할 수 있게끔 해줘야 함.
// // 배열을 가공할 일이 없거나, 배열의 뒷쪽으로만 새로운 요소가 추가될 경우 -> index를 key값으로 써도됨
// // 그게 아니라면 -> index로 key값 사용 불가

/*
----------
*/

import UserCard from "./components/UserCard";

// 배열 껍데기 안에 객체가 있는 경우도 마찬가지이다.
// 배열의 데이터를 가지고 반복렌더링하면 됨.
export default function App() {
  const users = [
    {
      id: 1,
      name: "park",
      age: 20,
    },
    {
      id: 2,
      name: "hong",
      age: 15,
    },
  ];
  return (
    <>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

// 반복의 요소가 jsx 뿐만 아니라 컴포넌트여도 가능
// 컴포넌트에 사용되는 key라는 속성은 props객체로 받을 수 없음
