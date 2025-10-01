function task1(callback) {
  console.log("task 1");
  callback();
}
function task2(callback) {
  setTimeout(() => {
    console.log("task 2");
    callback();
  }, 1000);
}
function task3(callback) {
  console.log("task 3");
  callback();
}
function task4(callback) {
  setTimeout(() => {
    console.log("task 4");
    callback();
  }, 1000);
}
function task5() {
  console.log("task 5");
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});
