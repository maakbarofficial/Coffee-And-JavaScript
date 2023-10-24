// for of

// ["", ", "]
// [({}, {}, {})];

const arr = [1, 2, 3, 4, 5, "somestring"];

for (const i of arr) {
  //   console.log(i);
}

const greetings = "Hello World";

for (const i of greetings) {
  //   console.log(i);
}

// Maps //Knows for unique values and key value pair
const map = new Map();
map.set("PK", "Pakistan");
map.set("KSA", "Saudia");
map.set("CAN", "CANADA");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "Clash Royale",
  game2: "Clash of Clane",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
