// 생성자 함수
function Person(lastName, firstName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
});

const p1 = new Person("Sumin", "Ahn");
p1.fullName = "Chulsu Park"; // setter 호출
console.log(p1.fullName); // kim
