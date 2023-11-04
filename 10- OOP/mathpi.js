const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); // Can't Change PI

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailble: true,
  orderChai: function () {
    console.log("chai is not available");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//   console.log(`${key}, ${value}`);
// }

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key}, ${value}`);
  }
}
