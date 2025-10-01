var num = 10; // 이거 왜함??
function outer(x) {
  function inner(x) {
    console.log(x + 10);
  }
  inner(x);
}
outer(10);
