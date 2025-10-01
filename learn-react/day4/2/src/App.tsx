// import Button from "./components/Button";

// export default function App() {
//   return (
//     <>
//       <Button>결제하기</Button>
//       <Button text={"등록하기"} />
//     </>
//   );
// }

// // 시작태그와 종료태그 사이에 있는 모든 게 콘텐츠

// // 콘텐츠는 전달되는 속성명이 정해져있음

/*
--------------------------------
*/

// 피그마 연습문제
import Input from "./components/html/Input";
import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";

export default function App() {
  return (
    <div className="center">
      <Input type="text" placeholder="Enter Todo List" />

      <Button>Add</Button>
      <Button className="bg-[#ED4848]">Cancel</Button>
      <Button className="bg-[#7D48ED]">Success</Button>

      <CheckBox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </span>
      </CheckBox>
    </div>
  );
}
