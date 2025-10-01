let num = 10;
let num2 = num; // 복사, 깊은 복사 (원본 데이터 유지한채로 복사)
num = 20; // num2는 변경되지 않음

const arr = ["a"];
const arr2 = arr; // 얕은 복사 (원본데이터를 조작하면, 복사된 데이터도 영향을 받음)
arr.push("b"); // arr2도 변경됨

// 객체를 복사하는 방법.
const original = { name: "Alice", age: 30 };
const original2 = { gender: "male" };
const copy = original;
const copy2 = Object.assign({}, original, original2); // assign은 뒤에 있는 객체의 속성을 앞에 있는 객체로 복사
console.log(copy); // { name: 'Alice', age: 30 }

const copy3 = { ...original, ...original2 }; // 스프레드 연산자 사용 // copy2 방식과 똑같음. sugar syntax

const deepCopy = structuredClone(original); // 깊은 복사. 브라우저에서 지원하는 메서드
JSON.parse(JSON.stringify(original)); // 깊은 복사. json 문자열로 변환 후 다시 객체로 변환
deepCopy.name = "Bob";
console.log(original.name); // Alice (원본 데이터는 변경되지 않음)
console.log(deepCopy.name); // Bob (복사된 데이터는 변경됨)

// 구조분해할당(비구조화할당)
const { name: userName, age: userAge } = { name: "kim", age: 20 };

const [a, b, c] = [1, 2, 3]; // 배열 구조분해할당

const {
  name,
  age,
  address: { city },
  food: [kimchi, bibimbap],
} = {
  name: "kim",
  age: 20,
  address: {
    city: "seoul",
    zip: "12345",
  },
  food: ["kimchi", "bibimbap"],
};
console.log(name); // kim
console.log(age); // 20
console.log(city); // seoul

//

const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
];
console.log(firstName, firstAge, secondName, secondAge); // kim 20 lee 30

//

const {
  members: [{ name: fname, age: fage }, { name: sname, age: sage }],
} = {
  members: [
    { name: "kim", age: 20 },
    { name: "lee", age: 30 },
  ],
};
console.log(fname, fage, sname, sage); // undefined

//

function userInfo({ name = "kim", age = 20 }) {
  console.log(name, age);
}
// userInfo({ name: "kim", age: 20 }); // kim 20
userInfo();

function sum(a = 10, b = 20) {
  return a + b;
}
console.log(sum()); // 30 (기본값 사용)
