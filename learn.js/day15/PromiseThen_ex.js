// ### 1. 기본 Promise
// **문제:** `resolve`와 `reject`를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
{
  const promise = new Promise((resolve) => resolve("성공!"));
  promise //
    .then(console.log);
}

// ---

// ### 2. 체이닝
// **문제:** 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.
{
  const promise = new Promise((resolve) => resolve(2));

  promise //
    .then((num) => num * 2)
    .then((num) => console.log(num));
}

// ---

// ### 3. 오류 처리
// **문제:** Promise를 생성하고, `reject`를 사용하여 오류를 발생시키세요.
{
  const promise = new Promise((_, reject) => reject(new Error("Error")));
  promise //
    .catch((reason) => console.error(reason));
}
// ---

// ### 4. 비동기 작업
// **문제:** setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
{
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("비동기작업완료");
    }, 1000);
  });
  promise //
    .then(console.log);
}
// ---

// ### 5. 중첩 Promise
// **문제:** 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
{
  const promise = new Promise((resolve) => resolve(2));
  promise //
    .then((num) => {
      return new Promise((resolve) => resolve(num * 2));
    })
    .then(console.log);
}
// ---

// ### 6. 조건부 실행
// **문제: condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.**
const promise = new Promise((resolve, reject) => {
  const condition = true;
  if(consdition) resolve("성공");
  ")
}
// ---
