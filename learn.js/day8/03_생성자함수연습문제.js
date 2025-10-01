// ## 문제 1: 자동차 객체 만들기
// **문제:** 자동차 객체를 생성하는 `Car` 생성자 함수를 만드세요. 자동차는 `make`, `model`, `year` 속성을 가지며,
// `drive` 메서드를 통해 자동차의 모델과 제조사를 출력합니다.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(`모델: ${model}\n제조사: ${make}`);
  };
}
const car1 = new Car("Hyundai", "Sonata", 2015);
car1.drive();

// ## 문제 2: 학생 객체 만들기
// **문제:** 학생 객체를 생성하는 `Student` 생성자 함수를 만드세요. 학생은 `name`, `grade` 속성을 가지며, `getInfo` 메서드를 통해 학생 정보를 출력합니다.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    console.log(`name: ${name}\ngrade: ${grade}`);
  };
}
const student1 = new Student("sumin", 4);
student1.getInfo();

// ## 문제 3: 동물 객체 만들기
// **문제:** `Animal` 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, `speak` 메서드를 통해 소리를 내는 기능을 추가하세요.
function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function () {
    console.log(`${this.name}가 소리를 냅니다`);
  };
}
const animal1 = new Animal("Dog", "Mammal");
animal1.speak(); // Dog가 소리를 냅니다

// ## 문제 4: 도서 객체 만들기
// **문제:** `Book` 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, `getSummary` 메서드를 통해 책의 요약 정보를 출력하세요.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    console.log(`제목: ${title}\n저자: ${author}\n출판 연도: ${year}`);
  };
}
const book1 = new Book("JavaScript", "John", 2020);
book1.getSummary();

// ## 문제 5: 은행 계좌 객체 만들기
// **문제:** `BankAccount` 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, `deposit`, `withdraw`, `getBalance` 메서드를 구현하세요.
function BankAccount(balance = 5000) {
  this.balance = balance;
  this.deposit = function (money) {
    balance += money;
    console.log(`${money}원 입금되었습니다`);
  };
  this.withdraw = function (money) {
    balance -= money;
    console.log(`${money}원 출금되었습니다`);
  };
  this.getBalance = function () {
    console.log(`현재 잔고: ${balance}원`);
  };
}
const account1 = new BankAccount();
account1.deposit(1000);
account1.withdraw(500);
account1.getBalance(); // 현재 잔고: 5500원

// ## 문제 6: 사각형 객체 만들기
// **문제:** `Rectangle` 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, `area`와 `perimeter` 메서드를 통해 면적과 둘레를 계산하세요.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log(`area: ${width * height}`);
  };
  this.perimeter = function () {
    console.log(`perimeter: ${width * 2 + height * 2}`);
  };
}
const rectangle1 = new Rectangle(5, 10);
rectangle1.area(); // area: 50
rectangle1.perimeter(); // perimeter: 30

// ## 문제 7: 비행기 객체 만들기
// **문제:** `Airplane` 생성자 함수를 만들어서, 비행기의 `model`, `capacity`, `fly` 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요.
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    console.log(`${model} 비행기가 ${capacity}명을 태우고 비행합니다.`);
  };
}
const airplane1 = new Airplane("Boeing 747", 660);
airplane1.fly(); // Boeing 747 비행기가 660명을 태우고 비행합니다.

// ## 문제 8: 팀 객체 만들기
// **문제:** `Team` 생성자 함수를 만들어서, 팀의 `name`과 `members` 속성을 갖고, `addMember` 메서드를 통해 팀원 추가 기능을 구현하세요.
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (name) {
    this.members.push(name);
  };
}
// 이러면 오류남. name이 겹침. 따로 변수 이름을 줘야 함.
// TypeError: this.members.push is not a function
//
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (memberName) {
    this.members.push(memberName);
  };
}
const team1 = new Team("T1", []); // 담을공간이 필요하므로 빈 배열 줌
console.log(team1.name, team1.members);
team1.addMember("faker");
team1.addMember("Zeus");
console.log(team1.name, team1.members);

// ## 문제 9: 영화 객체 만들기
// **문제:** `Movie` 생성자 함수를 만들어서, 영화의 `title`, `director`, `year` 속성을 갖고, `getDetails` 메서드를 통해 영화 정보를 출력하세요.
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    console.log(
      `제목: ${this.title}\n감독: ${this.director}\n출시 연도: ${this.year}`
    );
  };
}
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
movie1.getDetails(); // 제목: Inception, 감독: Christopher Nolan, 출시 연도: 2010

// ## 문제 10: 시간 객체 만들기
// **문제:** `Time` 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, `getTime` 메서드를 통해 시간을 출력하세요.
function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = function () {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  };
}
const time1 = new Time(10, 30, 45);
time1.getTime(); // 10:30:45
// 꼭 this.을 붙여야 함. 안그러면 처음 선언할 때 넣어준 10, 30, 45가 고정되고,
// 이후에 변경하더라도 반영되지 않음.
