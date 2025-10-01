function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.info = function () {
  return `Vehicle type: ${this.type}`;
};
function Car(brand) {
  Vehicle.call(this, "car"); // Vehicle 생성자 호출
  this.brand = brand;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getInfo = function () {
  return `${this.type}, ${this.brand}`;
};
const car1 = new Car("BMW");
console.log(car1.info()); // Vehicle type: car
console.log(car1.getInfo()); // car, BMW
