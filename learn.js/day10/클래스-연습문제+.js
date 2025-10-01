// ### 1) 프라이빗 필드 + 입금/출금 검증
// **문제 1:** `Account` 클래스를 만드세요.
// - 프라이빗 필드 `#balance` (초기값 0).
// - `deposit(amount)`, `withdraw(amount)`는 0보다 큰 숫자만 허용, 부족하면 Error.
// - `balance`는 **getter**로만 제공.
class Account {
  #balance = 0;
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) throw new Error("Invalid");
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  get balance() {
    return this.#balance;
  }
}

// 테스트
const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
acc.balance = 10; // 외부에서 프라이빗 변수 변경 안됨.
console.log(acc.balance); // 70

// ---

// ### 2) 상속 + 메서드 오버라이딩
// **문제 2:** `Vehicle`(name)과 이를 상속하는 `Car`(name, brand).
// - `Vehicle`의 `info()`는 `"차량: name"`.
// - `Car`는 이를 오버라이드해 `"브랜드 brand, 차량: name"` 반환.
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  info() {
    return `차량: ${this.name}`;
  }
}
class Car extends Vehicle {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }
  info() {
    return `브랜드: ${this.brand}, 차량: ${this.name}`;
  }
}
// 테스트
const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");
console.log(v.info()); // 차량: 스쿠터
console.log(c.info()); // 브랜드 Hyundai, 차량: 아반떼

// ---

// ### 3) 정적 유틸 메서드
// **문제 3:** `Temperature` 클래스에 정적 메서드 `c2f(c)`, `f2c(f)`를 구현하세요.
// - 화씨(F)↔섭씨(C) 변환 공식 사용(소수점은 반올림 없이 그대로).
// - C → F: `C * 9/5 + 32`
// - F → C: `(F - 32) * 5/9`
class Temperature {
  static c2f(c) {
    return (c * 9) / 5 + 32;
  }

  static f2c(f) {
    return ((f - 32) * 5) / 9;
  }
}

// 테스트
console.log(Temperature.c2f(0)); // 32
console.log(Temperature.f2c(212)); // 100

// ---

// ### 4) 접근자(fullName 조합)
// **문제 4:** `User`(first, last)에서
// - `fullName` **getter** → `"first last"`
// - `fullName` **setter** → `"성 이름"` 형태의 문자열을 받아 각각 분리하여 저장.
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    [this.first, this.last] = value.split(" ");
  }
}

// 테스트
const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

// ---

// ### 5) 메서드 체이닝
// **문제 5:** `QueryBuilder`는 내부에 문자열을 쌓습니다.
// - `select(cols)`, `from(table)`, `where(cond)`는 모두 `this`를 반환하여 체이닝.
// - `build()`는 최종 문자열을 반환.

// class QueryBuilder {
//   static string = "";
//   select(cols) {
//     QueryBuilder.string += `SELECT ${cols} `;
//     return this;
//   }
//   from(table) {
//     QueryBuilder.string += `FROM ${table} `;
//     return this;
//   }
//   where(cond) {
//     QueryBuilder.string += `WHERE ${cond} `;
//     return this;
//   }
//   build() {
//     return QueryBuilder.string;
//   }
// }
// 이것도 this를 반환하는 점에서 메서드 체이닝 구조는 따라할 수 있지만,
// 정적 변수를 씀으로써 인스턴스 간 독립성이 깨질 수 있다. 따라서 this.query 처럼 "인스턴스 속성"을 쓰는 게 적절하다.

class QueryBuilder {
  constructor() {
    this.query = "";
  }
  select(cols) {
    this.query += `SELECT ${cols} `;
    return this;
  }
  from(table) {
    this.query += `FROM ${table} `;
    return this;
  }
  where(cond) {
    this.query += `WHERE ${cond} `;
    return this;
  }
  build() {
    return this.query.trim();
  }
}

// 테스트
const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

// ---

// ### 6) 프로토타입 확장
// **문제 6:** `Person`(name)을 만들고, 선언 후 **프로토타입에** `greet()`를 추가하세요.
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `${this.name}님, 안녕하세요!`;
  }
}

// 테스트
const p = new Person("이순신");
console.log(p.greet()); // 이순신님, 안녕하세요!

// ---

// ### 7) 인스턴스 수 카운트(정적 필드)
// **문제 7:** `Book`(title) 생성 시마다 카운트를 증가시키고,
// - `Book.getCount()`로 현재 수를 반환.
class Book {
  static count = 0;
  constructor(title) {
    this.title = title;
    Book.count++;
  }
  static getCount() {
    return Book.count;
  }
}
// 테스트
const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2
