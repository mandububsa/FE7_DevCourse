function task1() {}
function task2() {}
function task3() {}
function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task4");
      resolve();
    }, 1000);
  });
}

async function runTasks() {
  try {
    await task1();
    await task2();
    await task3();
    await task4();
    task5();
  } catch (e) {
    console.error(e);
  } finally {
    console.log("task all finished");
  }
}
runTasks();
