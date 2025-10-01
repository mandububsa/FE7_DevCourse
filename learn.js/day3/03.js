// 05. 반복문 연습문제 - 쉬움

// 1.
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 2.
let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += i;
}
console.log(sum);

// 3.
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log(sumEven);

// 4.
let sumPositive = 0;
let numArr = [10, -10, 20, -30, 40];
for (const num of numArr) {
  if (num > 0) {
    sumPositive += num;
  }
}
console.log(sumPositive);

// 5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else {
    console.log(`${i} 홀수`);
  }
}

// 6. 주어진 숫자 배열의 최댓값 찾기
const numArray = [7, 2, 9, 4, 5];
let maxNum = numArray[0];
for (const num of numArray) {
  if (num > maxNum) {
    maxNum = num;
  }
}
console.log("최댓값", maxNum);

// 7.
const newArr = [];
const arr = ["a", "b", "c", "d", "e"];
for (const idx in arr) {
  if (idx % 2 === 0) {
    newArr.push(arr[idx]);
  }
}
console.log("짝수 인덱스의 값들 (0 포함):", newArr);

// 8.
for (let i = 1; i <= 9; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}
