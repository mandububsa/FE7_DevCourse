const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("kim");
    reject(new Error("실패함"));
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
    return "task2";
  })
  .then((value) => {
    console.log(value);
    return "task3";
  })
  .then((value) => {
    console.log(value);
    return "task4";
  })
  .then((value) => {
    console.log(value);
    return "task all finished";
  })

  .catch((reason) => {
    console.log(reason);
  });
