// Two types of data type
// 7 types:
// Primitive
// String
// Boolean
// Number
// BigInt
// Null
// Undefined
// Symbol

// Non-Primitive (reference type) =>
// Object
// Array
// Functions

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Ali";

// Booleans
let x = true;
let y = false;

// Symbols
const id = Symbol("123");
const anotherid = Symbol(123);

// Object:
const person = { firstName: "Ali", lastName: "Akbar" };

// Array object:
const cars = ["Civic", "Mehran", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//function
const myFunctions = function () {
  console.log("This is functions");
};

console.table([length, weight, color, lastName, x, y, id, anotherid]);

console.table([person]);

console.table([cars]);

console.log(date);

console.log(myFunctions);

// ********************************* Memory In JS ******************************

// Stack & Heap

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Ali Akbar";

let myFullName = myName;

myFullName = "Muhammad Ali Akbar";

console.log(myName);
console.log(myFullName);

let userOne = {
  name: "Ali Akbar",
  email: "ali@gmail.com",
};

let userTwo = userOne;

userTwo.email = "user@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// https://www.jsv9000.app/

// Stack hold value and gives copy
// Heap hold value and gives refernce (changes made up in orginal value)
