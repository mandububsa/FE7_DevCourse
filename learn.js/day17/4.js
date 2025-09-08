console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});
Promise.resolve().then(() => {
  console.log("promise");
});
console.log("end");
