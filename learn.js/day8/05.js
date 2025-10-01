const obj = {
  name: "main",
  main: function () {
    console.log("this");
  },
};

obj.main(); // this

// 화살표 함수는 내부에 this가 없음
// 따라서 자신이 속해 있는 컨텍스트의 this를 그대로 사용함 (상위 lextical 환경의 this를 사용함)
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind(); // window
