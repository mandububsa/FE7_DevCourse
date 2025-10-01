const num = 10.12; /// 래퍼 객체로 감싸짐
console.log(num.toFixed(5)); // 10.12000

const str = "A";
const strFromObj = new String("A");

console.log(str == strFromObj); // true (값이 같음)
console.log(str === strFromObj); // false (타입이 다름)

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]

// // sort      %
// const numbers = [4, 2, 15, 1, 3];
// numbers.sort(function (a, b) {

// }

function mapValues(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
}
