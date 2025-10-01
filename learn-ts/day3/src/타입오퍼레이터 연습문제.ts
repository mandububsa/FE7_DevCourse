// ### 1. **유니언 타입 사용하기: 값 출력하기**
// **문제:**`string` 또는 `number` 타입의 값을 받아서 해당 값을 출력하는 함수 `printValue`를 작성하세요.
// 이 함수는 입력된 값이 `string`이면 문자열 그대로 출력하고, `number`이면 숫자 그대로 출력해야 합니다.
const printValue = (value: string | number): void =>  console.log(value);
printValue("Hello"); // "Hello" 출력
printValue(42); // 42 출력

// ---

// ### 2. **유니언 타입을 사용한 조건 처리**
// 주어진 입력 값이 `string`이면 그 길이를, `number`이면 2배 값을 반환하는 함수 `doubleOrLength`를 작성하세요.
// 함수는 `string` 타입이면 문자열의 길이를, `number` 타입이면 그 숫자의 두 배 값을 반환해야 합니다.
const doubleOrLength = (value: string | number): number => {
  if (typeof value === "string") return value.length;
  else if (typeof value === "number") return value * 2;
  throw new Error("invalid");
};

console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)

// ---

// ### 3. **인터섹션 타입 사용하기: 객체 합치기**
// **문제:**`name`과 `age` 속성을 가진 사람 객체와 `jobTitle`과 `salary` 속성을 가진 직장인 객체가 있을 때,
// 이 두 객체를 합쳐서 새로운 객체를 반환하는 함수 `mergeObjects`를 작성하세요. 결과 객체는 이름, 나이, 직업, 월급을 포함해야 합니다.
{
  const mergeObjects = (
  person: { name: string; age: number },
  employee: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
  name: person.name,
  age: person.age,
  jobTitle: employee.jobTitle,
  salary: employee.salary,
  });

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
}
// 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }

// ---

// ### 4. **유니언 타입을 사용한 배열 처리**
// 배열이 `number[]` 또는 `string[]`일 때, 배열의 첫 번째 요소를 반환하는 함수 `getFirstElement`를 작성하세요.
// 열이 비어 있을 경우 `undefined`를 반환해야 합니다. 반환값은 배열의 첫 번째 요소 타입과 동일해야 합니다.
const getFirstElement = (arr: number[] | string[]): number | string | undefined => {
  if (typeof arr[0] === "number" || typeof arr[0] === "string") return arr[0];
  else return "undefined";
};

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

// ---

// ### 5. **유니언 타입을 사용한 값 비교**
// 두 값을 받아서 두 값이 같으면 `true`를, 다르면 `false`를 반환하는 함수 `isEqual`을 작성하세요.
// 입력 값은 `string` 또는 `number`일 수 있으며, 두 값이 동일하면 `true`를 반환하고, 다르면 `false`를 반환해야 합니다.
const isEqual = (a: number | string, b: number | string): boolean =>  a === b;

console.log(isEqual(10, 10)); // true
console.log(isEqual("hello", "world")); // false
console.log(isEqual(5, "5")); // false

// ---

// ### 6. **인터섹션 타입을 활용한 필드 업데이트**
// **문제:**`name`과 `age` 속성을 가진 객체에 `address`를 추가하는 함수 `updateAddress`를 작성하세요.
// `address`는 `string` 또는 `undefined`일 수 있습니다.
// `address`가 전달되지 않으면 기존 객체에 `address`는 포함되지 않아야 합니다.
const updateAddress = (
  person: { name: string; age: number },
  address?: string
): {name: string; age: number; address?: string} => {
  const obj = { name: person.name, age: person.age };
  if (address) obj.address: string = address;
}

const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
console.log(updatedPerson);
// 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
console.log(updatedPersonWithoutAddress);
// 예상 출력: { name: "John", age: 22 }

// ---

// ### 7. **유니언 타입을 사용한 함수 반환 타입**
// 두 값을 받아서 그 중 더 큰 값을 반환하는 함수 `maxValue`를 작성하세요. 입력 값은 `number` 또는 `string`일 수 있으며, 숫자일 경우 그대로 반환하고, 문자열일 경우 길이가 더 긴 문자열을 반환합니다. 만약 두 값이 같으면 그 값을 반환하세요.
const maxValue = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a === "string" && typeof b === "string") return a.length > b.length ? a : b;
  return a > b ? a : b;
}

console.log(maxValue(10, 20)); // 20
console.log(maxValue("apple", "banana")); // "banana"
console.log(maxValue(30, 30)); // 30
console.log(maxValue("cat", "dog")); // "dog"

// ---

// ### 8. **유니언 타입으로 함수 오버로딩하기**
// **문제:**`getValue` 함수는 `string` 또는 `number`를 받아서 `string` 값을 반환합니다. `number`인 경우에는 그 값을 `string`으로 변환하고, `string`인 경우 그대로 반환합니다.
// 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
function getValue(value: number): string;
function getValue(value: string): string;
function getValue(value: string | number): string {
  return value.toString();
};

console.log(getValue(123));   // "123"
console.log(getValue("abc")); // "abc"

// ---

// ### 9. **인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)**
// **문제:**`name`, `age` 속성을 포함하는 객체와 `email` 속성을 포함하는 객체를 합쳐서 새로운 객체를 반환하는 `createContact` 함수를 작성하세요. 두 객체를 합친 결과는 이름, 나이, 이메일을 포함해야 합니다.
const createContact = ...

const person = { name: "Alice", age: 28 };
const contact = { email: "alice@example.com" };

const personWithContact = createContact(person, contact);
console.log(personWithContact);
// 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }

// ---

// ### 10. **유니언 타입을 사용한 나이 체크**
// **문제:**`age` 값을 받아서, `string`일 경우 나이로 변환하여 처리하고, `number`일 경우 그대로 반환하는 `getAge` 함수를 작성하세요. 
// 만약 `string`을 받았을 경우에는 그 값을 `number`로 변환하여 반환해야 합니다. 변환할 수 없는 `string`이면 `NaN`을 반환합니다.
const getAge = 

console.log(getAge("25"));  // 25
console.log(getAge(30));    // 30
console.log(getAge("abc")); // NaN
