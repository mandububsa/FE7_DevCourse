class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 부모 클래스의 생성자를 호출
  }
  speak() {
    return `${this.name} barks.`;
  }
}
const dog1 = new Dog("Rex");
console.log(dog1.speak()); // undefined barks.
