const score = 400;

// console.log(score);

const balance = new Number(1000.23327982389);

const price = 123.8966;

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));
// console.log(price.toPrecision(2));

const hunderds = 10000;

// console.log(hunderds.toLocaleString("en-PK"));

// *************************** Maths **********************************

// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.round(2.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.max(10, 5, 85, 77));
// console.log(Math.min(10, 5, 85, 77));

// let MaxOfArray = [52, 52, 5, 8, 9];

// console.log(Math.max(MaxOfArray));

// console.log(Math.random());

// console.log(Math.random() * 10 + 1);

// console.log(Math.floor(Math.random() * 10) + 1);

//Logic for dice

const min = 1;
const max = 6;

const randomDiceNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomDiceNumber);
