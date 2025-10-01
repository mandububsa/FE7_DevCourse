// Date

const now = new Date("2025-08-25T02:34:33.830");
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getMonth());

console.log(now.toDateString()); // 날짜를 문자열로 변환
console.log(now.toLocaleDateString()); // 지역에 맞는 날짜 형식

//

const startDate = new Date(2025, 8, 25);
// const endDate = new Date("2025-12-25");
const endDate = new Date(2025, 12, 25);

const dateDiff = endDate - startDate; // 밀리초 단위 차이
const diffDays = dateDiff / (1000 * 60 * 60 * 24); // 일 단위로 변환
console.log(diffDays);
