function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, age, skill) {
  Person.call(this, name, age); // Person 생성자 호출
  this.skill = skill;
}
// Person.prototype 참조해서 새로운 객체를 만들겠다.
// const newObject = Object.create(Person.prototype);
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

console.dir();

Developer.prototype.getInfo = function () {
  return `${this.name}, ${this.age}, ${this.skill}`;
};
const dev1 = new Developer("Alice", 30, "JavaScript");
console.dir(dev1);
console.log(dev1.getInfo()); // Alice, 30, JavaScript
