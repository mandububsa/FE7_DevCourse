// ### 문제 1: 주말 확인
// **설명**: 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.
function isWeekend(str) {
  const [year, monthIndex, date] = str.split("-");
  const theDay = new Date(year, monthIndex - 1, date);

  const dow = theDay.getDay();
  return dow === 0 || dow === 6 ? "주말" : "평일";
}



console.log(isWeekend("2024-10-26")); // 주말
console.log(isWeekend("2024-10-29")); // 평일
console.log(isWeekend("2024-10-27")); // 주말



// ---

// ### 문제 2: 두 날짜의 주차 수 계산
// **설명**: 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.
function weeksBetween(start, end) {
  const [y1, mi1, d1] = start.split("-");
  const [y2, mi2, d2] = end.split("-");
  const startDate = new Date(y1, mi1 - 1, d1);
  const endDate = new Date(y2, mi2 - 1, d2);
  const result = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 7));
  return `${result}주`;
}

console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

// ---

// ### 문제 3: 다음 생일 계산
// **설명**: 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.
function daysUntilNextBirthday(str) {
  const [y, mi, d] = str.split("-");
  const now = new Date();
  (mi+d < )
  while(now) {
    if ()
    year++
  }
}

console.log(daysUntilNextBirthday("1990-05-15")); // 263
console.log(daysUntilNextBirthday("2000-12-31")); // 128
console.log(daysUntilNextBirthday("1985-08-25")); // 0

// ---

// ### 문제 4: 특정 월의 주 수

// **설명**: 주어진 연도와 월의 주 수를 계산하세요.

// **예상 결과**:

// ```
// 2024년 10월: 5주
// ```

// ```jsx
// console.log(weeksInMonth(2024, 0)); // 5주
// console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
// console.log(weeksInMonth(2024, 6)); // 5주
// ```

// ---

// ### 문제 5: 특정 날짜에서의 일요일 찾기

// **설명**: 주어진 날짜에서 가장 가까운 이전 일요일의 날짜를 출력하세요.

// **예상 결과**:

// ```
// 2024-10-30의 이전 일요일: 2024-10-27
// ```

// ```jsx
// console.log(previousSunday('2024-10-30')); // 2024-10-27
// console.log(previousSunday('2024-10-26')); // 2024-10-20
// console.log(previousSunday('2024-10-29')); // 2024-10-27
// ```

// ---

// ### 문제 6: 해당 연도의 마지막 날

// **설명**: 주어진 연도의 마지막 날의 날짜와 요일을 출력하세요.

// **예상 결과**:

// ```
// 2024년 마지막 날: 2024. 12. 31. 화요일
// ```

// ```jsx
// const result = lastDayOfYear(2024);
// console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일
// ```

// ---

// ### 문제 7: 생일 중복 확인

// **설명**: 두 사람의 생일이 같은 날인지 확인하는 함수를 작성하세요.

// **예상 결과**:

// ```
// 2024-05-15와 1990-05-15: 같은 날입니다.
// ```

// ```jsx
// console.log(isSameBirthday('2024-05-15', '2020-05-15')); // 같은 날입니다.
// console.log(isSameBirthday('2024-05-15', '2020-05-25')); // 다른 날입니다.
// ```

// ---

// ### 문제 8: 월별 평균 일수 계산

// **설명**: 주어진 연도에 대한 각 월의 평균 일수를 출력하세요.

// **예상 결과**:

// ```
// 2024년 각 월의 평균 일수: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// ```

// ```jsx
// console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
// ```

// ---

// ### 문제 9: 연도의 첫 번째 월요일 찾기

// **설명**: 주어진 연도의 첫 번째 월요일의 날짜를 출력하세요.

// **예상 결과**:

// ```
// 2024년 첫 번째 월요일: 2024. 01. 08.
// ```

// ```jsx
// const firstMonday = firstMondayOfYear(2024);
// console.log(firstMondayOfYear); // 2024년 첫 번째 월요일: 2024. 01. 08.
// ```

// ---
