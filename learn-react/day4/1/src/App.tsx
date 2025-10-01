// import Child from "./components/Child";

// 1
// export default function App() {
//   return (
//     <>
//       <Child str="Hello, World!" />
//     </>
//   );
// }

// 2
// export default function App() {
//   return (
//     <>
//       <Child num={42} />
//     </>
//   );
// }

// 3
// export default function App() {
//   const fruits = ["Apple", "Banana", "Cherry"];
//   return (
//     <>
//       <Child arr={fruits} />
//     </>
//   );
// }

// 4
// export default function App() {
//   return (
//     <>
//       <Child girl={{ name: "Alice", age: 30 }} />
//     </>
//   );
// }

// 5
// export default function App() {
//   return (
//     <>
//       <Child isLoggedIn={false} />
//     </>
//   );
// }

// 6
// export default function App() {
//   const clickHandler = () => {
//     console.log("click");
//   };
//   return (
//     <>
//       <Child onClick={clickHandler} />
//     </>
//   );
// }

// 7
// export default function App() {
//   return (
//     <>
//       <Child />
//     </>
//   );
// }

// 8
// export default function App() {
//   return (
//     <>
//       <Child
//         style={{ fontSize: "50px", color: "red", textDecoration: "underline" }}
//       />
//     </>
//   );
// }

// // 9
// const Header = () => <h1>Header</h1>;
// const Content = () => <h1>Content</h1>;
// const Footer = () => <h1>Footer</h1>;

// export default function App() {
//   return (
//     <>
//       <Child Header={<Header />} Content={<Content />} Footer={<Footer />} />
//     </>
//   );
// }

/*

----------------------------------------------------

*/

// 디자인 연습문제
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <Profile
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImage="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        igId="@sallytheramos"
        onClick={() => {
          console.log("clicked!");
        }}
      />
      <Profile
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImage="https://cdn.pixabay.com/photo/2023/12/04/17/16/woman-8429860_1280.jpg"
        uname="Sally Ramos"
        igId="@sallytheramos"
        onClick={() => {
          console.log("clicked!");
        }}
      />
    </>
  );
}
