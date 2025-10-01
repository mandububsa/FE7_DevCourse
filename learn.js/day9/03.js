function Apliance(powerOn) {
  this.powerOn = !!powerOn; // 명시적 형변환
}
Apliance.prototype.toggle = function () {
  this.powerOn = !this.powerOn; // 명시적 형변환
  return this.powerOn;
};
function WashingMachine(powerOn, mode) {
  Apliance.call(this, powerOn); // Apliance 생성자 호출
  this.mode = mode || "normal"; // 기본값 설정 (mode 인자가 없으면 "normal")
}
WashingMachine.prototype = Object.create(Apliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.wash = function () {
  if (!this.powerOn) return "Cannot wash, the machine is off";
  return `Washing in ${this.mode} mode`;
};
const wm = new WashingMachine(false, "quick");
console.log(wm.wash()); // Cannot wash, the machine is off
console.log(wm.toggle()); // true
console.log(wm.wash()); // Washing in quick mode
