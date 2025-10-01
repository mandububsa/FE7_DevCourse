const obj = Object.freeze({
  name: "kim",
});
obj.name = 10; // 변경되지 않음
obj.age = 20; // 추가되지 않음
delete obj.name; // 삭제되지 않음

console.log(Object.isFrozen(obj)); // true

//

const sealedObj = Object.seal({
  name: "kim",
});
sealedObj.name = "lee"; // 변경됨
sealedObj.age = 20; // 추가되지 않음
delete sealedObj.name; // 삭제되지 않음
console.log(sealedObj); // { name: 'lee' }

console.log(Object.isSealed(sealedObj)); // true

//

const preventedObj = Object.preventExtensions({
  name: "kim",
});
preventedObj.name = "lee"; // 변경됨
preventedObj.age = 20; // 추가되지 않음
delete preventedObj.name; // 삭제됨
console.log(preventedObj); // { name: 'lee' }

console.log(Object.isExtensible(preventedObj)); // false
