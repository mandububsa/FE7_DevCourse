// 04. 조건문 연습문제

// 1. 학점 계산기
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// 2. 짝수와 홀수 판별
const num = 42;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. 로그인 확인 및 권한 부여
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}

// 4. 숫자 크기 비교
const a = 3;
const b = 5;
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 5. 월별 계절 판별
// switch (month) {
//   case (12, 1, 2):
//     console.log("Winter");
//     break;
//   case (3, 4, 5):
//     console.log("Spring");
//     break;
//   case (6, 7, 8):
//     console.log("Summer");
//     break;
//   case (9, 10, 11):
//     console.log("Fall");
//     break;
// }
// swith문은 case 당 하나의 값만 올 수 있으므로 이렇게 짜지 않는다.
// if문으로 변경.
const month = 6;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Fall");
} else {
  console.log("Invalid month");
}

// 6. 할인율 계산
let price = 70000;
if (price >= 100000) {
  price *= 0.8;
  console.log(price);
} else if (price >= 50000) {
  price *= 0.9;
  console.log(price);
} else {
  console.log(price);
}

// 7.
const day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// 8.
const num2 = 10;
if (num2 > 0) {
  console.log("Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
