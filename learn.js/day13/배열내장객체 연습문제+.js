// ## 문제 1: 중첩 배열 평탄화
// n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요. 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.

function flattenArray(arr) {
  return arr.reduce((r, v) => {
    return r.concat(Array.isArray(v) ? flattenArray(v) : [v]);
  }, []);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// 출력: [1, 2, 3, 4, 5, 6, 7]

console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
// 출력: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[[]]]));
// 출력: []

console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
// 출력: [1, 2, 3, 4, 5]

console.log(flattenArray([1, 2, 3]));
// 출력: [1, 2, 3]

// ## 문제 2: 배열 내 객체 그룹화
// 객체 배열이 주어졌을 때, 특정 속성을 기준으로 객체들을 그룹화하는 함수를 작성하세요.

// function groupBy(arr, key) {
//   const res = Object.groupBy(arr, ({ key }) => key);
//   return res;
// } /????

function groupBy(arr, key) {
  return arr.reduce((r, v) => {
    if (!r[v[key]]) {
      r[v[key]] = [];
    }
    r[v[key]].push(v);
    return r;
  }, {});
}

const people = [
  { name: "John", age: 20, city: "New York" },
  { name: "Jane", age: 20, city: "Boston" },
  { name: "Mark", age: 25, city: "New York" },
  { name: "Mary", age: 25, city: "Boston" },
  { name: "James", age: 30, city: "New York" },
];

console.log(groupBy(people, "age"));
// 출력: {
//   '20': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Jane', age: 20, city: 'Boston' }
//   ],
//   '25': [
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ],
//   '30': [
//     { name: 'James', age: 30, city: 'New York' }
//   ]
// }

console.log(groupBy(people, "city"));
// 출력: {
//   'New York': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'James', age: 30, city: 'New York' }
//   ],
//   'Boston': [
//     { name: 'Jane', age: 20, city: 'Boston' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ]
// }

// 빈 배열 테스트
console.log(groupBy([], "age"));
// 출력: {}

// 존재하지 않는 키로 그룹화
console.log(groupBy(people, "country"));
// 출력: { 'undefined': [...] }

//

// ## 문제 3: 중복 요소 제거와 빈도수 계산
// 배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.

// function getFrequency(arr) {
//   const obj = {};
//   const unique = [];
//   const frequency = {};
//   arr.forEach((a) => {
//     if (!Object.hasOwn(unique, a)) {
//       unique.push(a);
//       frequency[a] = 1;
//     } else {
//       frequency[a]++;
//     }
//   });

//   obj.unique = unique;
//   obj.frequency = frequency;
//   return obj;
// }

function getFrequency(arr) {
  const frequency = arr.reduce((m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});

  const unique = arr.filter((v, i) => arr.indexOf(v) === i);

  return { unique, frequency };
}

console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
// 출력: {
//   unique: [1, 2, 3, 4, 5],
//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// }

console.log(getFrequency(["a", "b", "a", "c", "b", "a"]));
// 출력: {
//   unique: ['a', 'b', 'c'],
//   frequency: { 'a': 3, 'b': 2, 'c': 1 }
// }

console.log(getFrequency([true, false, true, true]));
// 출력: {
//   unique: [true, false],
//   frequency: { 'true': 3, 'false': 1 }
// }

console.log(getFrequency([]));
// 출력: { unique: [], frequency: {} }

console.log(getFrequency([1]));
// 출력: { unique: [1], frequency: { '1': 1 } }

//

// ## 문제 4: 배열 회전
// 배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요. 음수 스텝은 왼쪽 회전을 의미합니다.
function rotateArray(arr, steps) {
  const array = arr;
  if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      const tmp = array.pop();
      array.unshift(tmp);
    }
  } else {
    steps = Math.abs(steps);
    for (let i = 0; i < steps; i++) {
      // array.push(array.shift());
      const tmp = array.shift();
      array.push(tmp);
    }
  }
  return array;
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

// ## 문제 5: 배열 차집합
// 두 배열이 주어졌을 때, 첫 번째 배열에는 있지만 두 번째 배열에는 없는 요소들을 반환하는 함수를 작성하세요.
function arrayDifference(arr1, arr2) {
  // 여기에 코드를 작성하세요
  return arr1.filter((v) => !arr2.includes(v));
}

console.log(arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]));
// 출력: [1, 3, 5]

console.log(arrayDifference([1, 1, 2, 2], [1, 2]));
// 출력: []

console.log(arrayDifference([1, 2, 3], []));
// 출력: [1, 2, 3]

console.log(arrayDifference([], [1, 2, 3]));
// 출력: []

console.log(arrayDifference([1, 2, 3], [4, 5, 6]));
// 출력: [1, 2, 3]

console.log(arrayDifference(["a", "b", "c"], ["a"]));
// 출력: ['b', 'c']
// ```

// ## 문제 6: 연속된 부분 배열의 최대 합
// 정수 배열이 주어졌을 때, 연속된 부분 배열의 합이 최대가 되는 값을 찾는 함수를 작성하세요.
function maxSubArraySum(arr) {
  const state = arr.slice(1).reduce(
    (s, v) => {
      // s는 객체, v는 숫자값이 될 것임
      s.cur = s.cur + v > v ? s.cur + v : v;
      s.max = s.cur > s.max ? s.cur : s.max;
    },
    { cur: arr[0], max: arr[0] }
  );
  return state.max;
}

const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(input1)); // 6 ([4, -1, 2, 1])

const input2 = [-1, -2, -3, -4];
console.log(maxSubArraySum(input2)); // -1 ([-1])

const input3 = [1, 2, 3, 4, 5];
console.log(maxSubArraySum(input3)); // 15 ([1, 2, 3, 4, 5])

const input4 = [1, -1, 1, -1, 1, -1, 1];
console.log(maxSubArraySum(input4)); // 1 ([1])

const input5 = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(input5)); // 7 ([4, -1, -2, 1, 5])

//

// ## 문제 7: 배열 이진 검색
// 정렬된 배열에서 특정 값의 위치를 이진 검색으로 찾는 함수를 작성하세요. 값이 없으면 -1을 반환합니다.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const gap = right - left;
    const half = (gap - (gap % 2)) / 2;
    const mid = left + half; // left + Math.floor((right - left) / 2)

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArr, 7)); // 3
console.log(binarySearch(sortedArr, 10)); // -1
console.log(binarySearch(sortedArr, 1)); // 0
console.log(binarySearch(sortedArr, 15)); // 7
console.log(binarySearch(sortedArr, 0)); // -1
