function printOne(callback) {
  console.log("1");
  callback();
}
function printTwo(callback) {
  setTimeout(() => {
    console.log("2");
    callback();
  }, 1000);
}
function printThree() {
  console.log("3");
}
printOne(() => {
  printTwo(() => {
    printThree();
  });
});
