// Producer
const promise = new Promise((resolve, reject) => {
  console.log("promise created");
  setTimeout(() => {
    // resolve("task1");
    reject("실패함");
  }, 1000);
});

// Consumer
promise.then(
  (value) => {
    // fulfilled
    console.log(value);
  },
  (reason) => {
    // rejected
    console.log(reason);
  }
);
