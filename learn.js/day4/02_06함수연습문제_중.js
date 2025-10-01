// Q1.
function removeChar(str, char) {
  let string = "";
  for (const i of str) {
    if (i !== char) string += i;
  }
  return string;
}

console.log(removeChar("hello world", "o")); // "hell wrld"

// Q2.
function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Q3.
function containsNumber(arr, number) {
  for (const num of arr) {
    if (num === number) return true;
  }
  return false;
}
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// Q4.
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (const char of str1) {
    if (str2.includes(char)) str2.replace(char, "");
    else return false;
  }
  return true;
}
console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// Q5.
function twiceSum(arr, number) {
  const array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= number) break; // 목표값보다 크거나 같은 수는 아예 고려 x
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) array.push([arr[i], arr[j]]);
    }
  }
  return array;
}

console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]
