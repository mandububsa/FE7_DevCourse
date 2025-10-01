class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  get age() {
    return this.#age; // private 필드에 접근하는 getter
  }
  set age(value) {
    if (value < 0) {
      throw new Error("나이는 음수일 수 없습니다.");
    }
    this.#age = value; // private 필드에 접근하는 setter
  }
}
const p1 = new Person("kim", 20);
p1.age = -10;
console.log(p1.age);
