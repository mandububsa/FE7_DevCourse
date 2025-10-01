// value
// writable
// enumerable
// configurable
Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});
person.age = 25; // 변경되지 않음

Object.defineProperties(person, "age", {
  job: {
    value: "Engineer",
    enumerable: true,
    writable: true,
    configurable: false,
  }
  salary: {
    value: 50000,
    enumerable: true,
    writable: true,
    configurable: false,
  }
});