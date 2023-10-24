//Array
const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Imran Khan", "Zeeshan Usmani"];
const myArray2 = new Array(1, 5, 5);

// console.log(myArray[5]);
// console.log(myHeros[1]);

//Array Methods

// myArray.push(6); Adding elements in array
// myArray.push(7);
// myArray.pop(); Removing last element from array

// myArray.unshift(8); Adding element to zero index
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(2));

// const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof newArray);

// Slice & Splice of Array

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);

console.log("C ", myArray);

console.log(myn2);
