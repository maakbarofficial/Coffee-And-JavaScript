const userEmail = "h@hitesh.ai"; // we have assume that this string is truthy value

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

/*
:=> Falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

except above all values are Truthy:
"0", "false", true, [], "abc", 23 > 0, function(){} empty function, {Object.keys({})} 

*/

const userArray = [];
const userObj = {};

if (userArray.length == 0) {
  console.log("User Array is empty");
}

if (Object.keys(userObj).length == 0) {
  console.log("User Object is empty");
}

/*
false == 0; true
false == ''; true
0 == ''; true
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

// Ternairy Operator (this is seprate from above concept)
// condition ? true : false

const coffeePrice = 100;

coffeePrice <= 80
  ? console.log("less than 80")
  : console.log("greater than 80");
