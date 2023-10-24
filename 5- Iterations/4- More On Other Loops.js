const myObject = {
  js: "JavaScript",
  cpp: "C++",
  c: "C",
  py: "Python",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "c", "c++", "py", "java"];

for (const key in programming) {
  //   console.log(`${key} index is ${programming[key]}`);
}

// Map is not itertable
const map = new Map();
map.set("PK", "Pakistan");
map.set("KSA", "Saudia");
map.set("CAN", "CANADA");

for (const key in map) {
  console.log(key);
}
