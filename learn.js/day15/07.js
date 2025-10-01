function task1() {
  return new Promise((resolve) => resolve("task1"));
}
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("task2"), 1000);
  });
}
function task3() {
  return new Promise((resolve) => resolve("task3"));
}
function task4() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("task4"), 1000);
  });
}
function task5() {
  return "task all finished";
}

task1() //
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => task5);
