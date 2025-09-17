// 1
// export default function Child(props: { str: string }) {
//   return (
//     <>
//       <h1>{props.str}</h1>
//     </>
//   );
// }

// 2
// export default function Child(props: { num: number }) {
//   return (
//     <>
//       <h1>{props.num}</h1>
//     </>
//   );
// }

// 3
// type ListProps = {
//   arr: string[];
// };
// export default function Child({props}: ListProps) {
//   return (
//     <>
//       <h1>{props.arr}</h1>
//     </>
//   );
// }

// 4
// export default function Child(props: { girl: { name: string; age: number } }) {
//   return (
//     <>
//       <h1>{props.girl.name}</h1>
//       <h1>{props.girl.age}</h1>
//     </>
//   );
// }

// 5
// export default function Child({ isLoggedIn }: {isLoggedIn : boolean}) {
//   return (
//     <>
//       <h1>{isLoggedIn ? "로그인 됨" : "로그인 안됨"}</h1>
//     </>
//   );
// }

// 6
// export default function Child({ onClick }: { onClick: () => void }) {
//   return (
//     <>
//       <button onClick={onClick}>클릭!</button>
//     </>
//   );
// }

// 7
// export default function Child({ name = "홍길동" }: { name?: string }) {
//   return (
//     <>
//       <h1>{name}</h1>
//     </>
//   );
// }

// 8
// interface ChildProps {
//   // style: { fontSize: string; color: string, textDecoration: string };
//   // style: { [key:string]: string};
//   style: React.CSSProperties;
// }
// export default function Child(props: ChildProps) {
//   return (
//     <>
//       <h1 style={props.style}>Child Component</h1>
//     </>
//   );
// }

// // 9
// export default function Child({
//   Header,
//   Content,
//   Footer,
// }: {
//   Header: React.ReactNode; // or ReactElement 가능. 노드가 더 넓은 범위
//   Content: React.ReactNode; // or ReactElement 가능. 노드가 더 넓은 범위
//   Footer: React.ReactNode; // or ReactElement 가능. 노드가 더 넓은 범위
// }) {
//   return (
//     <>
//       {Header}
//       {Content}
//       {Footer}
//     </>
//   );
// }
