const obj = {
  name: "Alice",
};

const obj2 = new Object();

function Person(name) {
  this.name = name;
}
const obj3 = new Person("Bob");

const obj4 = Object.create();

const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345",
    details: {
      street: "Rabbit Hole",
      country: "Wonderland",
    },
  },
};

const objects = {
  name,
  main,
};
objects.main(); // { name: 'Bob', main: [Function: main] }



const person = {
  name = "Bob",
  age: 30,
  job: "Engineer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

["name", "age", "job"].forEach((key) => {
  console.log(`${key}`);
}

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
}

Object.values(person).forEach((v) => {
  console.log(v);
}