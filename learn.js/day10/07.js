class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 정적 메서드
  static greet() {
    return `Hello`;
  }
}

const p1 = new Person("kim", 20);
console.log(p1.greet()); // kim
