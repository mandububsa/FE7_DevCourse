const animal1 = {
  animalName: "Lion",
  animalType: "Mammal",
  animalAge: 5,
  animalGender: "Male",
  animalInfo: function () {
    return `${this.animalName} is a ${this.animalType} aged ${this.animalAge} years and is a ${this.animalGender}.`;
  },
};

// 생성자 함수로
function MakeAnimalObject(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalName} is a ${this.animalType} aged ${this.animalAge} years and is a ${this.animalGender}.`;
  };
}
console.log(animal1);
const animal2 = new MakeAnimalObject("나리", "고양이", 3, "암컷");
console.log(animal2);
