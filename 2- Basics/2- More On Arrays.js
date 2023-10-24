const myHeros = ["Zeeshan Usmani", "Imran Khan", "Ronaldo"];
const myHeros2 = ["Misbah Ul Haq", "Sajid Ghori"];

// myHeros.push(myHeros2); // Adding second array as an object in first array

// console.log(myHeros);

// console.log(myHeros[3][0]);

// const allHeros = myHeros.concat(myHeros2); // Merging arrays
// console.log(allHeros);

// Spread Operator

const all_new_heros = [...myHeros, ...myHeros2];
// console.log(all_new_heros);

// Arrays in Array in Array
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);

// const arr_another_array = another_array.flat(Infinity);
// console.log(arr_another_array);

// For data scrapping
// console.log(Array.isArray("Akbar")); // checking if its array or not
// console.log(Array.from("Akbar")); // making array of Akbar
// console.log(Array.from({ name: "Akbar" })); // will give empty array

// Making arrays from variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
