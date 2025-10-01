// 01. 복합대입연산자 연습
let x = 20;
x += 10;
console.log(x); // 30

x -= 5;
console.log(x); // 2

x /= 2;
console.log(x); // 12.5

x *= 3;
console.log(x); // 37.5

//

// 02. 삼항연산자 연습

// 1. 숫자 비교
const num = 4;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 2. 최댓값 찾기
const a = 10;
const b = 20;
const c = 30;
const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

// 3. 짝수 홀수 확인
const number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 4. 로그인 확인
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");

// 5. 성인 확인
const age = 18;
console.log(age >= 18 ? "Adult" : "Minor");
