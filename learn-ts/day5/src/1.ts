{
  // 클래스
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    start(name: string): string {
      return `${name}, starts!`;
    }
  }

  const benz = new Car(100);
  console.log(benz.speed);

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `Hello, ${this.name}, ${this.age}`;
    }
  }
  const person = new Person("john", 20);
  console.log(person.introduce());
}

{
  // 접근제어자가 있다.
  class Car {
    public speed: number; // public. 생략해도 기본값.
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret(): string {
      return "차 사고 크게 난 적 있음...";
    }
    search(): string {
      return this.secret();
    }
  }
  const car = new Car(100);
  console.log(car.speed);
  console.log(car.search());
}

{
  class Car {
    private engineOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log("Engine is already started");
        return;
      }
      this.engineOn = true;
      console.log("Engine started");
    }
    // 엔진 정지
    stop() {
      if (!this.engineOn) {
        console.log("Engine is already stopped");
        return;
      }
      this.engineOn = false;
      console.log("Engine stopped");
    }
    // 엔진 상태
    isEngineOn(): boolean {
      return this.engineOn;
    }
  }

  const benz = new Car();
  benz.start();
  benz.stop();
  benz.stop();
  console.log(benz.isEngineOn());
  // 프라이빗 사용 예시
}

{
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car {
    showSpeed() {
      console.log(this.speed);
    }
  }
  const benz = new Benz(100);
  benz.showSpeed();
}
{
  class Character {
    protected hp: number = 100;
  }
  class Warrior extends Character {
    attack() {
      this.hp -= 10;
      console.log(`HP after attack: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.attack();
}

{
  class Config {
    readonly apiUrl = "https://api.example.com";
    readonly appVersion = "v1.0";

    displayConfig() {
      console.log(`apiUrl: ${this.apiUrl}, APP_VERSION: ${this.appVersion}`);
    }
  }
  const config = new Config();
  console.log(config.apiUrl);
  console.log(config.appVersion);
  config.displayConfig();
}

{
  // 메소드 오버라이딩
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }
  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Benz: ${this.speed}`;
    }
  }

  const benz = new Benz(100, "S Class");
  console.log(benz.getSpeed());
}

{
  // 추상클래스
  abstract class Animal {
    abstract makeSound(): void;
  }
  class Dog extends Animal {
    makeSound(): void {
      console.log("멍멍");
    }
  }
  const dog = new Dog();
  dog.makeSound;
}
{
  // 직접구현
  abstract class CarAbstract {
    private abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
  }
  class Benz extends CarAbstract {
    // 인터페이스와는 다르게 하나의 클래스만 extends 할수있다
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super(); // 필수!
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return this.speed;
    }
  }
  const benz = new Benz("S", 200, "black");
  console.log(benz.maxSpeed());
}

{
  // implements        + interface(type)
  // 추상클래스는 직접 구현이 가능한데
  // 얘는 직접 구현 불가능, 여러개 implements 가능
  interface Runner {
    name: string;
    run(): void;
  }
  interface Swimmer {
    swim(): void;
  }
  abstract class PersonAbstract {
    abstract stop(): void;
  }
  class Person extends PersonAbstract implements Runner, Swimmer {
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run(): void {
      console.log("Person Runs!");
    }
    swim(): void {
      console.log("Person swims!");
    }
    stop(): void {}
  }
}

{
  interface A {
    a(): void;
  }
  interface B extends A {
    b(): void;
  }
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
}
