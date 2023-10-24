// While and Do While Loop

let index = 0;
while (index <= 10) {
  console.log(`Values of index is ${index}`);
  index = index + 2;
}

let myArray = ["Imran Khan", "Cristiano Ronaldo", "Misbah Ul Haq"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Values of index is ${myArray[arr]}`);
  arr = arr + 1;
}

// Kam pehly condition bad me e.g. udhar
let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// let score = 10;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);
