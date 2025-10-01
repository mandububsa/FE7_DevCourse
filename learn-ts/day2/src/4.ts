{
  // 이건 판단
  let x: number | string = 10;
  x.toFixed(20);

  // 이건 판단 못함
  function printValue(x: number | string) {
    // console.log(x.toFixed(2));
  }
  printValue(10);
}
