{
  // 선언 병합
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum도 가능
  // 값이 다르면 선언 병합됨
  enum Direction {
    UP, // 0
    DOWN, // 1
  }
  enum Direction {
    RIGHT = 2,
    LEFT = 3,
  }
  Direction.LEFT;
}
{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U ? X : Y

  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}

{
  // "a" | "c"
  type Exclude<T, U> = T extends U ? never : T;
  type MyType = "a" | "b" | "c";
  type Result = Exclude<MyType, "b">;
}
