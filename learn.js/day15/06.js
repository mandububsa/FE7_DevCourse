const fetchNumber = new Promise((resolve) => {
  setTimeout(() => resolve(2));
});
fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => console.log(num));
