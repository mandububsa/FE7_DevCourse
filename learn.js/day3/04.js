// 05. 반복문 연습문제 - 어려움

// 1. 피보나치 수열 계산
const n = 10;
const fibArr = [0, 1];
let sum = 0;

for (let i = 0; fibArr.length < n; i++) {
  sum = fibArr[i] + fibArr[i + 1];
  fibArr.push(sum);
  sum = 0;
}
console.log(fibArr);

//  2. 소수 찾기
const start = 1;
const end = 100;
const results = [];

for (let i = start; i <= end; i++) {
  const divisor = [];

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      // i가 j를 약수로 가지면
      divisor.push(j);
    }
  }

  if (divisor.length === 2) results.push(i);
}
console.log(results);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25]; // 배열
let result = 0;
for (const num of numbers) result += num;
console.log(result); // 75

// 4. 문자열 뒤집기
const str = "Hello, World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

// 5. 특정 숫자까지의 곱 계산
const num = 5;
let factorial = 1; // 0! = 1
for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(`${num}의 팩토리얼:`, factorial); // 출력 120

// 6. 암스트롱수
for (let i = 1; i <= 9; i++) {
  // 백의 자리
  for (let j = 0; j <= 9; j++) {
    // 십의 자리
    for (let k = 0; k <= 9; k++) {
      // 일의 자리
      const str = `${i}` + `${j}` + `${k}`;
      const sum = i ** 3 + j ** 3 + k ** 3;
      if (str == sum) console.log(str);
    }
  }
}
