"use strict"; //treat all JS code as newer version

// alert(3 + 3); alert can be used in browser not nodejs

// console.log(3 * 3);
// console.log("Hello Akbar");

// Official Documentation
// www.tc39.es

let name = "hello";
let age = 22;
let isLoggedIn = true;

console.log(typeof name);

// Primitive:- (String,Boolean,Number,BigInt,Null,Undefined,Symbol )
// Non-Primitive:- Object (array, functions) also called object references.

// number => 2 to power 53
// bigint
// string => "Akbar"
// boolean => true false
// null => standalone value (it is a special type)
// undefined (by default assigned value to variable)
// symbol => unique

// object

console.log(typeof undefined); //undefined
console.log(typeof null); //object

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.table([length, weight, color, lastName, x, y, person, cars, date]);
