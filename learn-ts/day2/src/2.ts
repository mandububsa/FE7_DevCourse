// 함수에 타입을 지정하는 방법
// = 함수의 매개변수와 반환값의 타입을 지정하는 것
// function (n1: 매개변수타입): 반환값의 타입 {}

{
  // 함수 선언문
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  function printValue(value: string): void {
    console.log(value);
  }

  function throwError(msg: string): never {
    throw new Error(msg);
  }
}

{
  // 함수 표현식
  // (1) - 함수 표현식의 타입을 지정하는 방식
  const suma = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  // (2) - 변수에 함수 타입을 지정하는 방식
  const sumb: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // (3) - 둘 다 하든지
  const sumc: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
}

{
  // 화살표 함수
  // (1) - 함수 표현식의 타입을 지정하는 방식
  const suma = (n1: number, n2: number): number => n1 + n2;

  // (2) - 변수에 함수 타입을 지정하는 방식
  const sumb: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

  // (3) - 둘 다 하든지
  const sumc: (n1: number, n2: number) => number = (
    n1: number,
    n2: number
  ): number => n1 + n2;
}

{
  // 옵셔널 파라미터
  // 옵셔널을 첫번째로 줄순없다.
  function sum(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }
}

{
  // 매개변수가 콜백함수일 때
  // function log(msg: string) {
  //   console.log(msg);
  // }

  function printValue(callback: (msg: string) => void): void {
    callback("Hello");
  }
  printValue((msg: string) => {
    console.log(msg);
  }); // 이렇게도 줄여 쓸수있다.

  function createMultiplier(factor: number): (num: number) => number {
    return (num) => num * factor;
  }
  const multiplyByTwo = createMultiplier(2);
  console.log(multiplyByTwo(5));
}

{
  // 간단 연습문제. 화살표함수로 바꿔보기
  const createMultiplier2: (factor: number) => (num: number) => number =
    (factor) => (num) =>
      num * factor;
}

{
  // ...numArr 스프레드연산자
}

{
  
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a} + ${b}`;
  }
  const num = sum(10, 20);
  console.log(typeof num, num);
  const str = sum("A", "B");
}
