class MathUtils {
  static PI = 3.14159265359;
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  // 정적 속성들
}

console.log(MathUtils.PI); // 3.14159265359
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(5, 3)); // 2
// 정적 메서드들은 클래스 이름을 통해 직접 호출할 수 있다.
