const literal1 = /abc/;
const literal2 = /abc/i; // 플래그, g, i

const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

// .test()
// 패턴이 문자열과 매칭되는지 확인
console.log(/abc/.test("123abcd1234")); // true

// .match()
// 패턴과 매칭되는 부분을 배열로 반환
console.log("123abd1234".match(/ab/g)); // ['ab']
