{
  let x: unknown;
  x = 10.12;

  if (typeof x === "number") {
    console.log(x.toFixed(2));
  }
}

{
  // 타입 단언
  // as, <> 두 방법
  // 개발자가 TS 컴파일러보다 타입을 더 잘 알고 있을 때 사용
  // => 타입을 내가 정의하겠다. 내가 보장하겠다.

  let x: unknown;
  x = 10.12;

  (x as number).toFixed(1); // 왜냐? 믿으니까.... "야 이건 무조건 넘버다."
  (<number>x).toFixed(1); // 리액트에서 이 <> 방법은 잘 안씀. JSX 문법과 충돌나서.

  const el = document.querySelector("#user") as Element;
  el.addEventListener("click", function () {});
}
