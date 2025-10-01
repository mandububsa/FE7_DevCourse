// ### 문제 1
// **문제 설명:** `Person` 생성자 함수를 작성하고, `greet` 메서드를 프로토타입에 추가하세요. 이 메서드는 "Hello, my name is [name]"을 출력해야 합니다.
// **기본 제공 코드:**
function Person(name) {
  this.name = name;
}

// 여기에 greet 메서드를 추가하세요.
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

// ### 문제 2
// **문제 설명:** `Car` 생성자 함수를 작성하고, `start` 메서드를 프로토타입에 추가하여 "The car has started."를 출력하도록 하세요.
// **기본 제공 코드:**
function Car(brand) {
  this.brand = brand;
}

// 여기에 start 메서드를 추가하세요.
Car.prototype.start = function () {
  console.log(`The car ${this.brand} has started.`);
};
const myCar = new Car("Toyota");
myCar.start();

// ### 문제 3
// **문제 설명:** `Rectangle` 생성자 함수를 만들고, 면적을 계산하는 `area` 메서드를 프로토타입에 추가하세요.
// **기본 제공 코드:**
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// 여기에 area 메서드를 추가하세요.
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

// ### 문제 4
// **문제 설명:** `Animal` 생성자 함수를 만들고, `speak` 메서드를 프로토타입에 추가하여 "Animal makes a sound"를 출력하도록 하세요.
// **기본 제공 코드:**
function Animal(animal) {}

// 여기에 speak 메서드를 추가하세요.
Animal.prototype.speak = function () {
  console.log(`Animal makes a sound`);
};
const animal = new Animal("dog");
animal.speak();

// ### 문제 5
// **문제 설명:** `Dog` 생성자 함수를 만들고, `speak` 메서드를 오버라이드하여 "Woof!"를 출력하도록 하세요.
// **기본 제공 코드:**
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

// 여기에 Dog의 speak 메서드를 수정하세요.
Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak();

// ### 문제 6
// **문제 설명:** `Student` 생성자 함수를 만들고, `introduce` 메서드를 프로토타입에 추가하여 "Hi, I'm [name] and I'm a student."를 출력하도록 하세요.
// **기본 제공 코드:**
function Student(name) {
  this.name = name;
}

// 여기에 introduce 메서드를 추가하세요.
Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

// ### 문제 7
// **문제 설명:** `Book` 생성자 함수를 만들고, `getSummary` 메서드를 프로토타입에 추가하여 "Title: [title], Author: [author]"를 출력하도록 하세요.
// **기본 제공 코드:**
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// 여기에 getSummary 메서드를 추가하세요.
Book.prototype.getSummary = function () {
  return `Title: ${this.title}, Author: ${this.author}`;
};

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

// ### 문제 8
// **문제 설명:** `Shape` 생성자 함수를 만들고, `getType` 메서드를 프로토타입에 추가하여 "I am a shape."를 출력하도록 하세요.
// **기본 제공 코드:**
function Shape(shapeName) {
  this.shape = shapeName;
}

// 여기에 getType 메서드를 추가하세요.
Shape.prototype.getType = function () {
  console.log(`I am a ${this.shape}.`);
};
const shape = new Shape("circle");
shape.getType();

// ### 문제 9
// **문제 설명:** `Circle` 생성자 함수를 만들고, `getCircumference` 메서드를 프로토타입에 추가하여 원의 둘레를 계산하는 기능을 구현하세요.
// **기본 제공 코드:**
function Circle(radius) {
  this.radius = radius;
}

// 여기에 getCircumference 메서드를 추가하세요.
Circle.prototype.getCircumference = function () {
  return this.radius * 2 * 3.14;
};
const circle = new Circle(5);
console.log(circle.getCircumference());

// ### 문제 10
// **문제 설명:** `Employee` 생성자 함수를 만들고, `getDetails` 메서드를 프로토타입에 추가하여 "Name: [name], Position: [position]"을 출력하도록 하세요.
// **기본 제공 코드:**
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

// 여기에 getDetails 메서드를 추가하세요.
Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Position: ${this.position}`;
};
const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());
