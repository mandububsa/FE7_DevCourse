function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name}가 소리를 냅니다`;
};

const an = new Animal("cat");
console.log(an);

function Dog(name, age) {
  this.name;
  this.age = age;
}

// 새로운 객체를 만들건데, 그 객체의 프로토타입을 Animal.prototype으로 설정
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name}가 짖습니다`;
};

const dg = new Dog("puppy", 2);
console.dir(dg); // Dog { name: 'puppy', age: 2 }
console.log(dg.speak()); // puppy가 소리를 냅니다
