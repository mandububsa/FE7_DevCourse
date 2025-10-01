{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 20 };
  const position: { x: number; y: number; z?: number } = point;
  console.log(position);
  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (x: number, y: number) => number = fn1;
  console.log(fn2);
}

{
  // readonly
  // 특정객체의 속성을 수정하지 못하게 하는 TS만의 기능
  const user: {
    readonly name: string;
    readonly age: number;
  } = {
    name: "kim",
    age: 20,
  };

  // user.name = "park";
  // user.age = 30;

  const numArr: readonly number[] = [1, 2, 3];
  // numArr.push(4);
}

{
  // 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  const user: {
    [key: string]: string | number;
  } = {
    name: "kim",
  };
  user.gender = "male";
  user.address = "Seoul";
  user.age = 20;

  const person: {} = {
    name: "kim",
    gender: "male",
  };
}

{
  // 함수 -> 일급 객체
  const add: {
    (a: number, b: number): number;
  } = (a, b) => a + b;
  // 이렇게 객체 형식으로도 함수의 타입을 지정해줄 '순' 있지만, 굳이 그렇게 안씀. 가독성.
}
