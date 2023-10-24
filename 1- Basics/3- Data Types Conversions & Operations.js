let score = false;

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "Ali" => true

let someNumber = 7;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************** Operations *****************

let value = 3;
let negValue = -value;

// // console.log(negValue);

// // console.log(2 + 2);
// // console.log(2 - 5);
// // console.log(2 * 2);
// // console.log(2 / 2);
// // console.log(2 ** 2); // Power
// // console.log(5 % 2); // Remainder

let str1 = "Hello";
let str2 = "Akbar";

let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// // number are added then string attached with them output: 22
// console.log(1 + 1 + "2");

// // string attached with both numbers output: 122
// console.log("1" + 2 + 2);

// // number are added then string attached with them output: 32
// console.log(1 + 2 + "2");

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2;

let gameCounter = 100;
gameCounter++; // prefix
++gameCounter; // postfix

console.log(gameCounter);

//Example from mdn documentation

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//Postfix increment
// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n

//Prefix Increment
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
