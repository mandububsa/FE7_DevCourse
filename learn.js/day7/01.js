function levelup() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }
  return inner;
}

const myLevel = levelup();
console.log(myLevel());
console.log(myLevel());
console.log(myLevel());
