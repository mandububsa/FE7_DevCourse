function createUser(name) {
  let _name = name; // _ 이건 private 표시
  return {
    getName: () => _name,
    setName: () => _name,
  };
}

let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());
user = null; // undefined는 안됨? 가능. 똑같음.

let user2 = createUser("park");
console.log(user2.getName());
user2 = null;

// 은닉화
function counter() {
  let _count = 0;
  return {
    increment: function () {
      return ++_count;
    },
    decrement: function () {
      return --_count;
    },
  };
}
const mycount = counter();
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.decrement());

// 함수 팩토리
// : 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}
const double = makeMultiple(2);
console.log(double(5)); // 10
// double로 클로저함수 만들어서 double은 앞으로 항상 2배를 수행함.
double = null;

//
//

function fetchData(url) {
  let result;
  return function (callback) {
    setTimeout(() => {
      result = "Fetched... Success";
      callback(result);
    }, 1000);
  };
}

const fetchFromNaver = fetchData("https://www.naver.com");
fetchFromNaver((data) => console.log(data));

//

// 메모이제이션 패턴
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고
    // 이를 JSON 문자열로 변환하여 캐시 키로 사용.
    const key = JSON.stringify(args);

    // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];
    // 캐시에 결과가 없다면, 원래 함수를 호출하여 결과를 계산하고
    const result = cb(...args);
    // 그 결과를 캐시에 저장함
    cache[key] = result;
    // 그 계산된 결과를 반환
    return result;
  };
}

function slowFunction(num) {
  // 시간 오래 걸리는 함수, 아무 의미없음.
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(10)); // slowFunction 호출됨. 총 8초 정도 소요
console.log(memoizedFn(10)); // 최초 계산 이후로는 캐시된 결과를 반환
console.log(memoizedFn(10)); // 재계산 x

console.log(memoizedFn(20)); // 새로운 인자에 대해서는 다시 계산
