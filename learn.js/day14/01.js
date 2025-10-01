const key = "age";
const id = Symbol("id"); // Symbol is a unique identifier
const user = {
  [id]: 1, // Using Symbol as a key
  name: "kim",
  [key]: 20,
  [key + "a"]: 30,
};

console.log(user[name]); // Accessing the value using the Symbol key

const user = { name: "kim", addr: { zipCode: 121 } };
const copyUser = { ...user };

const map = new Map();
map.set("name", "kim");
map.set("age", 20);

for (const key of map.keys()) {
  console.log(`key: ${key}, value: ${map.get(key)}`);
}
for (const value of map.values()) {
  console.log(`value: ${value}`);
}

for (const [k, v] of map) {
  console.log(k, v);
}

map.forEach((value, key, map) => {
  console.log(value);
  console.log(key);
  console.log(map);
});

const map = new Map([
  ["name", "kim"],
  ["age", 20],
]);

const set = new Set();
set.add(1);
set.add("kim");
set.add({});

console.log(set);

const user = { name: "kim" };
const set = new Set([1, 2, 3, 1, 2, 3]);
console.log(set);
console.log(set.has(2));

const numArr = [1, 2, 3, 1, 2, 3];
const copyNumArr = [...new Set(numArr)]; // 중복 제거
console.log(copyNumArr);

for (const value of set) {
  console.log(value);
}
