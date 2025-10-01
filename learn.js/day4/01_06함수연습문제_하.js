// Q1.
function add(...nums) {
  let res = 0;
  for (const i of nums) {
    res += i;
  }
  return res;
}
console.log(add(1, 2, 3, 4));
// const sum = (...numbers) => numbers.reduce((sum, cur) => sum + cur, 0);
// 이렇게도 가능하다..

// Q2.
function calc(a, b) {
  console.log(`${a} + ${b} =`, a + b);
  console.log(`${a} - ${b} =`, a - b);
  console.log(`${a} * ${b} =`, a * b);
  console.log(`${a} / ${b} =`, a / b);
}
calc(7, 2);

// Q3.
function isEven(num) {
  if (num % 2 === 0) return true;
  else return false;
}
console.log(isEven(7));
// const isEven = (num) => num%2 ==== 0;
// 더 깔끔한 방법.

// Q4.
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3])); // 6

// Q5.
function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (max < num) max = num;
  }
  return max;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6.
function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}
console.log(reverseString("hello")); // "olleh"

// Q7.
function countCharacter(str, char) {
  let count = 0;
  for (const i of str) {
    if (i === char) count++;
  }
  return count;
}
console.log(countCharacter("banana", "a")); // 3

// Q8.
function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}
console.log(factorial(5));

// 재귀함수 방식
// function fac(n) {
//   // 종료조건
// if (n === 0 || n === 1) return 1;
// return n * fac(n-1);
// }

// Q9.
function triangleArea(bottom, height) {
  return (bottom * height) / 2;
}
console.log(triangleArea(10, 5));
