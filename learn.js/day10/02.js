function Person() {
  this.name = "kim";
  this.age = 20;
}
Person.prototype.greet = function () {
  return `Hi`;
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 구식 - 클래스 안에서 메서드 정의 방법
  // greetOld() {
  //   return `Hello`;
  // }
  // 단축 함수 문법
  greet() {
    return `Hi`;
  }
}

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);

console.log(typeof Person);
console.dir(per1);
