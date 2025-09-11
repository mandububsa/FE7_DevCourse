// 주어진 코드를 enum으로 리팩토링 해보세요.

// ### 문제 1: 요일을 나타내는 상수
// const MONDAY = 1;
// const TUESDAY = 2;
// const WEDNESDAY = 3;
// const THURSDAY = 4;
// const FRIDAY = 5;
// const SATURDAY = 6;
// const SUNDAY = 7;

// function getDayName(day: number): string {
//   if (day === MONDAY) return "Monday";
//   if (day === TUESDAY) return "Tuesday";
//   if (day === WEDNESDAY) return "Wednesday";
//   if (day === THURSDAY) return "Thursday";
//   if (day === FRIDAY) return "Friday";
//   if (day === SATURDAY) return "Saturday";
//   if (day === SUNDAY) return "Sunday";
//   return "Invalid day";
// }

enum Days {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}
function getDayName(day: Days): string {
  if (day === Days.MONDAY) return "Monday";
  if (day === Days.TUESDAY) return "Tuesday";
  if (day === Days.WEDNESDAY) return "Wednesday";
  if (day === Days.THURSDAY) return "Thursday";
  if (day === Days.FRIDAY) return "Friday";
  if (day === Days.SATURDAY) return "Saturday";
  if (day === Days.SUNDAY) return "Sunday";
  return "Invalid day";
}

console.log(getDayName(2));

// ---

// ### 문제 2: 상태 코드
// const SUCCESS = 200;
// const NOT_FOUND = 404;
// const INTERNAL_ERROR = 500;

// function getStatusMessage(status: number): string {
//   if (status === SUCCESS) return "Success";
//   if (status === NOT_FOUND) return "Not Found";
//   if (status === INTERNAL_ERROR) return "Internal Server Error";
//   return "Unknown Status";
// }

enum Status {
  SUCCESS = 200,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}
function getStatusMessage(status: number): string {
  if (status === Status.SUCCESS) return "Success";
  if (status === Status.NOT_FOUND) return "Not Found";
  if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
  return "Unknown Status";
}

console.log(getStatusMessage(Status.SUCCESS));

// ---

// ### 문제 3: 우편번호에 따른 지역 이름
// const SEOUL = "Seoul";
// const BUSAN = "Busan";
// const DAEGU = "Daegu";

// function getCityByZip(zip: string): string {
//   if (zip === "100") return SEOUL;
//   if (zip === "200") return BUSAN;
//   if (zip === "300") return DAEGU;
//   return "Unknown City";
// }

enum City {
  SEOUL = "Seoul",
  BUSAN = "Busan",
  DAEGU = "Daegu",
}
function getCityByZip(zip: City): string {
  if (zip === City.SEOUL) return City.SEOUL;
  if (zip === City.BUSAN) return City.BUSAN;
  if (zip === City.DAEGU) return City.DAEGU;
  return "Unknown City";
}
console.log(getCityByZip(City.SEOUL));

// ---

// ### 문제 4: 사용자 권한
// const ADMIN = "admin";
// const USER = "user";
// const GUEST = "guest";

// function getPermissionLevel(role: string): string {
//   if (role === ADMIN) return "Full access";
//   if (role === USER) return "Limited access";
//   if (role === GUEST) return "Guest access";
//   return "No access";
// }

enum Role {
  ADMIN = "Full acess",
  USER = "Limited access",
  GUEST = "Guest access",
}
function getPermissionLevel(role: Role): string {
  if (role === Role.ADMIN) return "Full access";
  if (role === Role.USER) return "Limited access";
  if (role === Role.GUEST) return "Guest access";
  return "No access";
}
console.log(getPermissionLevel(Role.ADMIN));

// ---

// ### 문제 5: 상품 상태
// const PENDING = 1;
// const SHIPPED = 2;
// const DELIVERED = 3;

// function getProductStatus(status: number): string {
//   if (status === PENDING) return "Pending";
//   if (status === SHIPPED) return "Shipped";
//   if (status === DELIVERED) return "Delivered";
//   return "Unknown Status";
// }
{
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }
  function getProductStatus(status: number): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }

  console.log(getProductStatus(1));
}

// ---

// ### 문제 6: 주문 상태
// const ORDER_PLACED = "Order Placed";
// const PAYMENT_PENDING = "Payment Pending";
// const SHIPPED = "Shipped";
// const DELIVERED = "Delivered";

// function getOrderStatus(status: string): string {
//   if (status === ORDER_PLACED) return "Your order has been placed.";
//   if (status === PAYMENT_PENDING) return "Payment is pending.";
//   if (status === SHIPPED) return "Your order has been shipped.";
//   if (status === DELIVERED) return "Your order has been shipped..";
//   return "Unknown Status";
// }
{
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been shipped.";
    return "Unknown Status";
  }

  console.log(getOrderStatus(Status.DELIVERED));
}

// ---

// ### 문제 7: 상태 변경
// const IS_ACTIVE = true;
// const IS_INACTIVE = false;

// function toggleStatus(status: boolean): boolean {
//   return !status;
// }
{
  enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: Status): boolean {
    return status === Status.IS_ACTIVE ? false : true;
  }
  console.log(toggleStatus(Status.IS_ACTIVE));
}

// ---

// ### 문제 8: 선택지 값
// const OPTION_ONE = "Option 1";
// const OPTION_TWO = "Option 2";
// const OPTION_THREE = "Option 3";

enum Option {
  OPTION_ONE = "Option 1",
  OPTION_TWO = "Option 2",
  OPTION_THREE = "Option 3",
}
function getOptionValue(option: Option): string {
  if (option === Option.OPTION_ONE) return "You selected Option 1.";
  if (option === Option.OPTION_TWO) return "You selected Option 2.";
  if (option === Option.OPTION_THREE) return "You selected Option 3.";
  return "Invalid option";
}
// ---

// ### 문제 9: 식사 시간
// const BREAKFAST = "Breakfast";
// const LUNCH = "Lunch";
// const DINNER = "Dinner";

enum Meal {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
}
function getMealTime(meal: Meal): string {
  if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
  if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
  if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
  return "Invalid meal time";
}

// ---

// ### 문제 10: 로그인 상태
// const LOGGED_IN = true;
// const LOGGED_OUT = false;
{
  enum Status {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return "You are logged in.";
    if (status === Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
