// ### 문제 1: 현재 날짜 출력
// **설명**: 현재 날짜와 시간을 `YYYY-MM-DD HH:mm:ss` 형식으로 출력하세요.
const now = new Date();
console.log(now.getFullYear());
console.log(now.getTime());
// 강사님 풀이
// const now = new Date();
// console.log(now.toISOString().slice(0, 19).replace("T", " "));

// ---

// ### 문제 2: 특정 날짜의 요일
// **설명**: 2025년 12월 25일이 무슨 요일인지 출력하세요.
const christmasDay = new Date(2025, 11, 25);
console.log(christmasDay.toLocaleDateString("ko-KR", { weekday: "long" }));

// ```
// 목요일
// ```

// ---

// ### 문제 3: 월별 마지막 날짜
// **설명**: 2025년 10월의 마지막 날짜를 구하세요.
console.log(new Date(2025, 10, 0).getDate()); // 10 => 11월

// ---

// ### 문제 4: 날짜 차이 계산
// **설명**: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
const st = new Date(2025, 0, 1);
const end = new Date(2025, 11, 31);
console.log((end - st) / (1000 * 60 * 60 * 24));
// 364

// ---

// ### 문제 5: 생일 계산
// **설명**: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
const birth = new Date(1990, 5, 15);
const now = new Date();
console.log(Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 365)) - 1);
// 34

// 강사님 풀이
// const birthday = new Date(1990, 4, 15);
// const today = new Date();
// let age = today.getFullYear() - birthday.getFullYear();
// if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.get) { // 생일이 안지났을 수도 있으니
//   age--;
// }
// console.log(age);
// )
// ---

// ### 문제 6: 날짜 추가
// **설명**: 현재 날짜에 10일을 추가한 날짜를 출력하세요.
// **예상 결과**: 현재 날짜 + 10일
const now = new Date();
now.setDate(now.getDate() + 10);
console.log(now);

// ---

// ### 문제 7: 특정 날짜의 월과 연도
// **설명**: 2025년 10월 30일의 월과 연도를 출력하세요.
const theDate = new Date(2025, 9, 30);
console.log(theDate.getFullYear(), theDate.getMonth() + 1);
// 2025, 10

// ---

// ### 문제 8: 오늘의 시작 시간
// **설명**: 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 `Date` 객체를 출력하세요.
const today = new Date();
const startToZeroTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
console.log(startToZeroTime);

// // 강사님 풀이
// const now = new Date();
// const year = now.getFullYear();
// const month = String(now.getMonth() + 1).padStart(2, "0");
// const date = String(now.getDate()).padStart(2, "0");
// console.log(`${year}. ${month}. ${date}. 00:00:00`);

// ---

// ### 문제 9: 월별 요일 출력
// **설명**: 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
// 2024년 10월의 모든 날짜와 요일 출력 (월 인덱스는 0=1월 → 10월은 9)
const year = 2024;
const month = 9; // 10월
const lastDay = new Date(year, month + 1, 0).getDate();
const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

for (let i = 1; i <= lastDay; i++) {
  const d = new Date(year, month, i);
  const yyyy = d.getFullYear();
  const mm = (d.getMonth() + 1).toString().padStart(2, "0");
  const dd = d.getDate().toString().padStart(2, "0");
  console.log(`${yyyy}-${mm}-${dd}: ${dayNames[d.getDay()]}요일`);
}
// ```
// 2024-10-01: 화요일
// 2024-10-02: 수요일
// ...
// 2024-10-31: 목요일
// ```

// // 강사님 풀이
// const lastDate = new Date(2024, 10, 0).getDate(); // 10월의 마지막 날짜
// const day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
// const pad = (n) => n.toString().padStart(2, "0");
// for ( let d = 1; d <= lastDate; d++ ) {
//   const date = new Date(2024, 9, d);
//   const weekday = day[date.getDay()];
//   console.log(`${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}: ${weekday}`);
// }

// ---

// ### 문제 10: 윤년 확인
// **설명**: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? "윤년"
    : "평년";
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2000));
