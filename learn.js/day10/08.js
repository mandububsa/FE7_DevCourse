class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age); // 부모 클래스의 생성자를 호출
    this.skill = skill;
  }
}
const dev1 = new Developer("kim", 20, "JavaScript");
console.dir(dev1);
console.dir(dev1.greet());

console.log(dev1 instanceof Developer); // true
console.log(dev1 instanceof Person); // true
