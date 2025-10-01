async function fetchNumber() {
  return 2;
}
fetchNumber() //
  .then(console.log);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumbers() {
  await delay(5000) //
    .then(() => 2);
  return 2;
}
