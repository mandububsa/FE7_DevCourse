{
  const str: string = "Hello";
  const num: number = 10;
  const bool: boolean = true;
  const undi: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol("a");
  const big: bigint = 100n;
}
{
  let str: string = "hello";
  str = "A";
}

// 참조 자료형
{
  const arr: number[] = [1, 2, 3];
  arr.push(4);

  const arr1_1: [number, string] = [1, "a"];

  const matrix: [number[], string[], boolean[]] = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, false],
  ];

  const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const blocks: [[string[], number[]], [string[], number[]]] = [
    [["a", "b"], [1]],
    [["d", "e"], [2]],
  ];
}

// 객체
{
  const obj: {} = {}; // Record<string, never> ??
  const user: {
    name: string;
    age: number;
    gender: string;
    fruits: string[];
    address: {
      zipcode: number;
      details: [string, string, number];
    };
  } = {
    name: "kim",
    age: 20,
    gender: "male",
    fruits: ["apple", "banana"],
    address: {
      zipcode: 111333,
      details: ["서울특별시", "관악구", 11],
    },
  };

  const memebers: { id: number; name: string }[] = [
    { id: 1, name: "kim" },
    { id: 2, name: "park" },
  ];

  const project: {
    id: string;
    members: { id: number; name: string };
  } = {
    id: "p1",
    members: { id: 44, name: "ahn" },
  };
}
