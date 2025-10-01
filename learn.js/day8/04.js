function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.author = "kim";
// 이거 화살표 함수로 바꾸면 안됨. this가 바인딩이 안됨.
Car.prototype.drive = function () {
  return `${this.model}, ${this.make}, ${this.year}`;
};
const car1 = new Car("Hyundai", "Sonata", 2015);
const car2 = new Car("Kia", "K5", 2020);
const car3 = new Car("Toyota", "Camry", 2018);

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1.make);
console.dir(car2.model);
console.dir(car3.year);
console.dir(car1.drive()); // 프로토타입 체인, 프로토타입 체이닝: 프로토타입 체인을 통해 메서드에 접근하는 것.

console.dir(car1.__proto__.author);
console.dir(car1.author);

console.dir(car1.__proto__.drive()); // undefined. // drive 메서드는 Car.prototype에 정의되어 있지만, this가 car1을 가리키지 않아서 undefined가 나옴
// this는 호출하는 객체를 가리키는 것이므로, car1이 아닌 Car.prototype을 가리키게 됨.
console.dir(car1.drive); // 정상적으로 현대, 소나타, 2025 나옴
