// Q1.
function compress(string) {
  let output = string[0];
  let count = 0;

  for (const char of string) {
    // 알파벳과 현재 저장된 마지막 글자가 같다면
    if (char === output[output.length - 1]) {
      count++;
    }
    // 다르다면
    else {
      output += count; // 연속된 개수 붙이고
      output += char; // 새로운 글자 붙이기
      count = 1;
    }
  }
  output += count; // 반복문 끝나고 마지막에 숫자 붙이기
  return output;
}

const i = "aaabbbccc";
const o = "a3b3c3";
console.log(compress(i));

const i2 = "aabbaa";
const o2 = "a2b2a2";
console.log(compress(i2));

const i3 = "abbbffd";
const o3 = "a1b3f2d1";
console.log(compress(i3));

const i4 = "aabaa";
const o4 = "a2b1a2";
console.log(compress(i4));

// Q2.
function isPalindrome(string) {
  // 대칭일테니 절반만 살피기
  for (let i = 0; i < string.length / 2 - 1; i++) {
    let head = string[i];
    let tail = string[string.length - (i + 1)];
    if (head !== tail) return false;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// Q3. 펠린드롬 어려운 버전... 어렵다
// console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
// console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
// console.log(isPalindromeSentence("Hello, world!")); // false
// console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// Q4. 최대공약수
function gcd(num1, num2) {
  const div1 = [],
    div2 = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) div1.push(i);
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) div2.push(i);
  }

  // 최댓값 찾기 위해 뒤에서부터 역순으로 탐색
  for (let j = div1.length - 1; j >= 0; j--) {
    for (let k = div2.length - 1; k >= 0; k--) {
      if (div1[j] === div2[k]) return div1[j];
    }
  }
}
console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

// Q5. 버블 정렬

function bubbleSort(array) {
  // i는 라운드의 개념으로 생각. 한 라운드(한 번의 순회) 당, 가장 큰 숫자 하나가 끝에 픽스됨.
  for (let i = 0; i < array.length - 1; i++) {
    // 맨 뒤에서부터 순차적으로 픽스. 그 앞 까지만 돌기.
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const a = array[j],
          b = array[j + 1];
        array[j] = b;
        array[j + 1] = a;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
