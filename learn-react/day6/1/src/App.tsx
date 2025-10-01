// import { useState } from "react";

// export default function App() {
//   const [user, setUser] = useState({ name: "kim", age: 20 });
//   const handleUpdate = () => {
//     // setUser({
//     //   name: "park",
//     //   age: 30,
//     // });

//     //   user.age = 30;
//     //   const newUser = structuredClone(user);
//     //   setUser(newUser);

//     setUser((user) => ({ ...user, age: 40 }));
//   };
//   return (
//     <>
//       <h1>Name: {user.name}</h1>
//       <h1>Age: {user.age}</h1>
//       <button onClick={handleUpdate}>변경!</button>
//     </>
//   );
// }

/*
======================================================================
*/
// import { useState } from "react";

// export default function App() {
//   const [text, setText] = useState("");
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   };
//   return (
//     <>
//       <pre>{text}</pre>
//       <textarea onChange={handleChange} placeholder="email" />
//     </>
//   );
// }
// // useState + Form
// // (React) onChange = (DOM) onInput + onChange

//

// import { useState } from "react";

// export default function App() {
//   const [text, setText] = useState("banana");
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setText(e.target.value);
//   };
//   return (
//     <>
//       <pre>{text}</pre>
//       <select onChange={handleChange} value={text}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orange">orange</option>
//       </select>
//     </>
//   );
// }

//

// // checkbox
// import { useState } from "react";

// export default function App() {
//   const [value, setValue] = useState(true);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.checked);
//   };
//   return (
//     <>
//       <pre>{value ? "동의" : "동의안함"}</pre>
//       <div>
//         <label htmlFor="chk">
//           <input type="checkbox" checked={value} onChange={handleChange} />
//           동의합니다
//         </label>
//       </div>
//     </>
//   );
// }

//

// // radio box
// import { useState } from "react";

// export default function App() {
//   const [select, setSelect] = useState("male");
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelect(e.target.value);
//   };
//   return (
//     <>
//       <pre>{select}</pre>
//       <div>
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           defaultChecked
//           onChange={handleChange}
//         />
//         남자
//       </div>
//       <div>
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           onChange={handleChange}
//         />
//         여자
//       </div>
//     </>
//   );
// }
// // name 속성이 같으면 단 한 가지만 선택할 수 있게됨
// // defaultChecked의 값을 useState() 초기값에 넣어주는게 포인트

/*
======================================================================
/* 
======================================================================
*/

// // useRef()
// // 리액트에서 값을 기억하거나 DOM 요소에 직접 접근할 떄 사용하는 훅
// import { useRef } from "react";

// export default function App() {
//   const ref = useRef<HTMLHeadingElement>(null); // current 속성이 포함된 객체가 반환됨
//   const handleClick = () => {
//     console.log(ref);
//     if (ref.current) {
//       ref.current.style.color = "red";
//     }
//   };
//   return (
//     <>
//       <h1 ref={ref}>App Component</h1>
//       <button onClick={handleClick}>click!</button>
//     </>
//   );
// }

// import { useRef } from "react";

// export default function App() {
//   const ref = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환됨
//   const checkboxRef = useRef<HTMLInputElement>(null);
//   const maleRef = useRef<HTMLInputElement>(null);
//   const femaleRef = useRef<HTMLInputElement>(null);
//   const textRef = useRef<HTMLTextAreaElement>(null);
//   const selectRef = useRef<HTMLSelectElement>(null);
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(ref.current?.value);
//     console.log(checkboxRef.current?.checked);

//     if (maleRef?.current?.checked) console.log("남성");
//     else if (femaleRef?.current?.checked) console.log("남성");
//     else console.log("x");

//     console.log(textRef.current?.value);

//     console.log(selectRef.current?.value);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <select ref={selectRef}>
//           <option value="apple">apple</option>
//           <option value="banana">banana</option>
//           <option value="orange">orange</option>
//         </select>
//         <textarea ref={textRef}></textarea>
//         <input type="text" ref={ref} />
//         <input type="checkbox" ref={checkboxRef} />
//         <input type="radio" ref={maleRef} />
//         남자
//         <input type="radio" ref={femaleRef} />
//         여자
//         <button type="submit">send</button>
//       </form>
//     </>
//   );
// }
// // ref 객체는 하나당 하나의 요소와 연결가능

/*
======================================================================
/* 
======================================================================
*/
import { useRef, useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const handleEmailUpdate = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("이메일을 입력해주세요");
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (pw.trim() === "") {
      alert("비밀번호를 입력해주세요");
      if (pwRef.current) pwRef.current.focus();
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          ref={emailRef}
          placeholder="이메일 입력"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="text"
          ref={pwRef}
          placeholder="비밀번호 입력"
          value={pw}
          setValue={setPw}
        />
        <button>LogIn</button>
      </form>
    </>
  );
}
