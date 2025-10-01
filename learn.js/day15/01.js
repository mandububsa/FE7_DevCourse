// 자바스크립트는 동기(Synchronous) 언어다.
// 코드가 한 번에 한 줄씩 실행되는
// 다만, 자바스크립트 언어적으로 비동기(Asynchronous)를 다룰 수 있는 메커니즘을 갖고 있을 뿐
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
// 1 3 2

// 동기 콜백 함수
const print = (fn) => fn();
print(() => console.log("hello"));

const processArray = (array, callback) => {
  for (const value of array) {
    callback(value);
  }
};
const logValue = (value) => console.log(value);
processArray([1, 2, 3, 4], logValue);

// 비동기 콜백 함수
const print2 = (fn) => setTimeout(fn, 1000);
print2(() => console.log("async callback"));
