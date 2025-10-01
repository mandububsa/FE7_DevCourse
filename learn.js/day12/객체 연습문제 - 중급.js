// ## 1. 객체 값 필터링
// 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요
function filterByThreshold(obj, threshold) {
  for (const key in obj) {
    if (obj[key] < threshold) {
      delete obj[key];
    }
  }
  return obj;
}
// 강사님 풀이
// function filterByThreshold(obj, threshold) {
//   const out = {};
//   const entries = Object.entries(obj);
//   for (const [k, v] of entries) {  // 구조분해할당
//     if (v >= threshold) out[k] = v;
//   }
//   return out;
// }

const obj = { a: 1, b: 5, c: 3 };
const threshold = 2;
console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

const obj2 = { x: 1, y: 2, z: 3 };
const threshold2 = 2;
console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

const obj3 = { a: 10, b: 5, c: 1 };
const threshold3 = 6;
console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

const obj4 = { m: -1, n: 0, o: 1 };
const threshold4 = 0;
console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }

// ## 2. 객체의 값 변화
// 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
function squareValues(obj) {
  for (const key in obj) {
    obj[key] *= obj[key];
  }
  return obj;
}
// 강사님 풀이
// function squareValues(obj) {
//   const out = {};
//   const entries = Object.entries(obj);
//   for (const [k, v] of entries) {
//     out[k] = v * v;
//   }
//   return out;
// }

const obj = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

const obj2 = { x: 2, y: 3 };
console.log(squareValues(obj2)); // { x: 4, y: 9 }

const obj3 = { p: 0, q: -2 };
console.log(squareValues(obj3)); // { p: 0, q: 4 }

const obj4 = {};
console.log(squareValues(obj4)); // {}

// ## 3. 키 이름 변경
// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.
// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)
function renameKey(obj, fromKey, toKey) {
  if (!(fromKey in obj) || fromKey === toKey) {
    return obj;
  }

  const newObj = {};
  for (const key in obj) {
    if (key === fromKey) {
      newObj[toKey] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// 강사님 풀이
function renameKey(obj, oldKey, newKey) {
  const out = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      if (key === oldKey) {
        out[newKey] = obj[key];
      } else {
        out[key] = obj[key];
      }
    }
  }
  return out;
}

console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
console.log(renameKey({}, "a", "b")); // {}
console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

// ## 4. 키 정렬된 새 객체 반환
// 객체의 키를 **알파벳 오름차순**으로 정렬해 **새 객체**로 반환하는 함수를 작성하세요.
function sortKeys(obj) {
  const keys = Object.keys(obj).sort();
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// 강사님 풀이
// .sort() 메서드는 시간 복잡도가 매우 크다! 남발하면 위험함..
// 그리고 sort 아직 안배웠으니까
// selection sort 알고리즘 적용

// function sortKeys(obj) {
//   const keys = Object.keys(obj);
//   const out = {};
//   for (let i = 0; i < keys.length; i++) {
//     let minKey = null;
//     let minIndex = -1;

//     // 남아 있는 키 중 가장 작은 것 찾기
//     for (let j = 0; j < keys.length; j++) {
//       if (keys[j] !== null) {
//         if (minKey === null || keys[j] < minKey) {
//           minKey = keys[j];
//           minIndex = j;
//         }
//       }
//     }
//     out[minKey] = obj[minKey];

//     keys[minIndex] = null;
//   }
//   return out;
// }

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// ## 5. 값 변환 (mapValues)
// 주어진 객체의 **값**에 변환 함수를 적용해 **새 객체**로 반환하는 함수를 작성하세요.
function mapValues(obj, fn) {
  const newObj = {};
  for (const k in obj) {
    newObj[k] = fn(obj[k]);
  }
  return newObj;
}

// 강사님 풀이
// 나중에 메서드 써서 쉽게 다시 구현해볼 예정.

// function mapValues(obj, fn) {
//   const out = {};
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     out[key] = fn(obj[key]);
//   }
//   return out;
// }

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// ## 6. 키/값 뒤집기 (invert)
// 객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요.
// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)
function invert(obj) {
  const newObj = {};
  for (k in obj) {
    newObj[obj[k]] = k;
  }
  return newObj;
}

// 강사님 풀이
// function invert(obj) {
//   const out = {};
//   const entries = Object.entries(obj);
//   for (const [k, v] of entries) {
//     out[v] = k; // 값이 키가 되고, 키가 값이 됨
//   }
//   return out;
// }

console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({})); // {}
console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

// ## 7. 중첩 경로 값 얻기 (getByPath)
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.
// 경로가 없으면 `undefined`를 반환합니다.
function getByPath(data, str) {
  const arr = str.split(".");
  let path = data;
  for (const i in arr) {
    if (path === undefined || path === null) return undefined;
    path = path[arr[i]];
  }

  return path;
}

// // 강사님 풀이
// function getByPath(obj, path) {
//   const keys = path.split(".");
//   let current = obj;
//   for (let i = 0; i < keys.length; i++) {
//     // null, undefined, 0 전부 처리가능
//     if (!current) {
//       // 여기선 || !Object.hasOwn(current, keys[i] 이거 할 필요없다.
//       return; // return undefined
//     }
//     current = current[keys[i]];
//   }
//   return current;
// }

// current = { a: { b: { c: 42 } } } [a]
// current = { b: { c: 42 } } [b]
// current = { c: 42 } [c]
const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c")); // 42
console.log(getByPath(data, "a.b.x")); // undefined
console.log(getByPath({}, "a.b")); // undefined
console.log(getByPath({ a: null }, "a.b")); // undefined

// ## 8. 중첩 경로 값 설정 (setByPath)
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 설정하는 함수를 작성하세요.
// 중간 경로가 없으면 **객체를 생성**하여 할당합니다. (원본 객체를 **변경**해도 좋음)

function setByPath(obj, str, value) {
  const arr = str.split(".");
  let path = obj;

  for (let i = 0; i < arr.length - 1; i++) {
    const key = arr[i];
    if (path[key] === undefined || path[key] === null) {
      path[key] = {};
    }
    path = path[key];
  }

  // 마지막 키에 값 설정
  path[arr[arr.length - 1]] = value;
}

// 강사님 풀이
function setByPath(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value; // 마지막 키에 값 설정
    } else {
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = {}; // 중간 경로가 없으면 객체 생성
      }
      current = current[key]; // 다음 경로로 이동
    }
  }
}

const obj1 = {};
setByPath(obj1, "a.b.c", 100);
console.log(obj1); // { a: { b: { c: 100 } } }

const obj2 = { a: { b: 1 } };
setByPath(obj2, "a.c", 2);
console.log(obj2); // { a: { b: 1, c: 2 } }

const obj3 = {};
setByPath(obj3, "x", 5);
console.log(obj3); // { x: 5 }

const obj4 = { a: null };
setByPath(obj4, "a.b", 10);
console.log(obj4); // { a: { b: 10 } }
