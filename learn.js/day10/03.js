class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // prototype 객체에 등록
  greet() {
    return `Hello, ${this.name}`;
  }
}
const p1 = new Person("kim", 20);
console.log(p1.greet()); // Hello, kim
