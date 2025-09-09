{
  // 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
  // 타입별칭과 유사하지만, 객체의 타입만 가능;

  const person: {
    name: string;
    age: number;
    gender: "male" | "femail" | "neutral";
  } = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}

{
  // 상속
  interface Person {
    name: string;
    age: number;
  }
  interface Developer extends Person {
    skill: string;
  }
}

{
  // 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }
  interface Swimmer {
    swim?(): void;
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const duck: Bird = {
    fly() {},
    sound() {},
  };
}
