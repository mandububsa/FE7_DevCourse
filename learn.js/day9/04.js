// 프라이빗 패턴
function Counter(num = 0) {
  let count = num;
  this.increment = function () {
    this.count++;
    return this.count;
  };
  this.decrement = function () {
    this.count--;
    return this.count;
  };
  this.getCount = function () {
    return this.count;
  };
}

const ct = new Counter(0);
ct.increment(); // 1
ct.increment(); // 2
console.log(ct.getCount()); // 2

ct.count = 100; // 외부에서 count 속성에 접근 가능. 원치 않는 변경이 발생가능.
