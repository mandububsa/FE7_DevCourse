{
  // 타입 오퍼레이터
  // 유니언 타입
  let x: number | string = 10;
  x = 20;
  x = "A";

  // 인터섹션 타입
  const user: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };
  const user2: { name: string; age: number } = {
    name: "kim",
    age: 20,
  };
}

{
  // 타입가드
  const arr: (string | number)[] = ["A", 10];
  const first = arr[0];
  if (typeof first === "string") {
    console.log(first.toLowerCase());
  }
}
