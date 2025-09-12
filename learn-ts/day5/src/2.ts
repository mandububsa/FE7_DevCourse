// 제네릭
// 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와준다.
// "치환"을 떠올리자.
{
  // T = Type (가장 일반적인 타입 변수)
  // K = Key (객체의 키)
  // V = Value (객체의 값)
  // E = Element (배열의 요소나 이벤트)
  // U = Another Type (T 이외 만만하면 U)

  function getFirstElement<T>(arr: T[]): T {
    return arr[0]!; // null 아님 보장 연산자 (!)
  }
  console.log(getFirstElement<number>([1, 2, 3]));
  console.log(getFirstElement<string>(["A", "B", "C"]));
  console.log(getFirstElement<boolean>([true, false]));
  console.log(getFirstElement<number | string>([1, "A"]));
}

{
  function identity<T>(value: T): T {
    return value;
  }

  // 제네릭도 타입추론이 된다.
  // 타입 명시가 꼭 필요한 게 아니라면, 생략하고 타입추론을 활용하자.
  const num = identity(42); // identity<number>(42) 안하고
  const str = identity("A");
  const bool = identity(true);
}

{
  function logArray<T>(arr: T[]): void {
    arr.forEach((value) => console.log(value));
  }
  logArray([1, 2, 3]);
  logArray(["a", "b", "c"]);
}

{
  function mergeObj(
    obj1: { name: string; age?: number },
    obj2: { age: number; gender?: string }
  ) {
    return { ...obj1, obj2 };
  }

  const mer1 = mergeObj({ name: "kim" }, { age: 20 });
  const mer2 = mergeObj({ name: "kim", age: 20 }, { age: 30, gender: "male" });
  // 이걸
}
{
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }; // ???
  }

  const mer1 = mergeObj({ name: "kim" }, { age: 20 });
  const mer2 = mergeObj({ name: "kim", age: 20 }, { age: 30, gender: "male" });
  console.log(mer1);
  // 이렇게
  // 제네릭 + 타입추론 으로 => 재사용성 + 가독성 챙기기
}

{
  // 타입 제약
  // 제네릭의 타입을 제약하는 문법
  // T extends U 구조
  function sumArray<T extends number>(arr: T[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
  sumArray([1, 2, 3]);
}
{
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  // returnLength([1, 2, 3]); 안됨 number에는 length가 없기때문
  returnLength(["a", "b", "c"]);
}
{
  function logKey<T extends { name: string; age: number }>(obj: T): void {
    console.log(`${obj.name}, ${obj.age}`);
  }
  logKey({ name: "kim", age: 20 });
}

{
  // 인터페이스의 제네릭
  interface Box<T extends number | string> {
    value: T;
    getValue(): T;
  }
  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };
  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}

{
  class Box<T extends {id: number}> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box();
  stringBox.add("A");
  stringBox.add("B");
  stringBox.add("C");
  console.log(stringBox.getAll());
}
