// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법
function Person() {
  this.name = "kim";
  this.age = 20;
}
// 인스턴스(=생성자 함수로 만든 객체)
const user1 = new Person();
console.log(user1); // Person { name: 'default', age: 0 }

//
//

function Car(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.getInfo = function () {
    return `차종: ${this.name}, 최고속도: ${this.maxSpeed}km/h`;
  };
}

const car1 = new Car("Bmw", 100);
const car2 = new Car("Benz", 200);

console.log(car1.getInfo()); // 나는 자동차입니다.
console.log(car2.getInfo()); // 나는 자동차입니다.
