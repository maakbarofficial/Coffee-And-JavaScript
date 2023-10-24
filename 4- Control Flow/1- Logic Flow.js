// If

// const isUserLoggedIn = true;

// if (2 == "2") {
//   console.log("execuated");
// }

// if (2 !== "3") {
//   console.log("execuated");
// }

// ****** Comparisons Operator ********
// < less then
// > greater then
// less then and equal to <=
// greater then and equal to >=
// single equal = is for assigning operator
// double equal == equality checking
// triple equal / strict equal === type checking
//  != not equal to
// !== strict anti pattern checking

/*

if(true/false){
    execute this scope, if false then this scope will not be executed
}

*/

const score = 200;

// if (score > 100) {
//   var power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`); // var give power a global scope which is not good there should be error in this console

// ****** Below code will be given error because of concept ************
// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`); // var give power a global scope which is not good there should be error in this console

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
