// Global Scope (Available for every block in global way)
let a = 100;
const b = 200;
var c = 300;

// Block Scope (Varibles inside block scope shouldnt go outside and thats why var is creating a problem)
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // Creating problem in scope
  //   console.log("Block Scope of a: ", a);
  //   console.log("Block Scope of b: ", b);
  //   console.log("Block Scope of c: ", c);
}

// console.log("Global Scope of a: ", a);
// console.log("Global Scope of b: ", b);
// console.log("Global Scope of b: ", c);

// More on Scopes nested scopes
function one() {
  const username = "Akbar";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); //give error due to scope

  //   two();
}

one();

if (true) {
  const username = "Akbar";
  if (username === "Akbar") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website); // error due to scope
}
// console.log(username); // scope is inside the if statement

// +++++++++++++++++++++++++++++ Intersting Example ++++++++++++++++++++++
console.log(addone(5));

function addone(num) {
  return num + 1;
}

console.log(addtwo(5));
// also called expression due to power of js vaiables
const addtwo = function (num) {
  return num + 2;
};

// addtwo give error due to the concept of hoisting
// addone is function but addtwo is a function which is stored in variables
