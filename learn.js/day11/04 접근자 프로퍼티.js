const person = {
  firstName: "sumin",
  lantName: "ahn",
  get fullName() {
    return `${this.firstName} ${this.lantName}`;
  },
  set fullName(value) {
    [this.firstName, this.lantName] = value.split(" ");
  },
};

console.log(person.fullName); // sumin ahn
person.fullName = "sumin lee";
console.log(person.fullName); // sumin lee
