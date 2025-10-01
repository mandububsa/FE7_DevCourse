class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

const p1 = new Person("Sumin", "Ahn");
p1.fullName = "Chulsu Park"; // setter 호출
console.dir(p1);
console.log(p1.fullName); // Chulsu Park
