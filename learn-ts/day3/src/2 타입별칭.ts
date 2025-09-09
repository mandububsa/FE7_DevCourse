{
  // 타입별칭 (type alias)
  // 나만의 커스텀 타입을 만들 수 있는 방법을 제공한다.

  // 1. 기본 타입 별칭
  type ID = string | number;
  const userId: ID = "mandu";
  const productId: ID = 1;
}

{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number;
  };

  const per1: User = {
    name: "kim",
    age: 20,
  };
}

{
  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  type AddFun2 = {
    // 함수는 이렇게 객체로도 타입 지정 가능
    (a: number, b: number): number;
  };
  const add: AddFun = (a, b) => a + b;
}

{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}

{
  // 5. 타입 확장
  // 5.1 유니온 타입
  // 5.2 인터섹션 타입
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID; // string | number
}

{
  // 6. 리터럴 타입 별칭
  type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
  const direct: Direction = "DOWN";
}
