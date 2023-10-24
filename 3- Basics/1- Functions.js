function SayMyName() {
  console.log("A");
  console.log("k");
  console.log("b");
  console.log("a");
  console.log("r");
}

// SayMyName();
// Inputs are Parameters
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

// Passing values in parameters is called Arguments
console.log(addTwoNumber(5, 7)); //12
const result = addTwoNumber(5, 7);
console.log(result); //undefined

// the above function is showing undefined beacuse we didnt return anything in the function

function AddNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   console.log(result);
  //   return result;
  return number1 + number2; // This is second method
}

console.log(AddNumbers(5, 2));

function loginUserMsg(username) {
  if (username === undefined) {
    console.log("If enter a valid username");
    return; // return nothing so that function can terminate here
  }
  return `Just LoggedIn ${username}`;
}

console.log(loginUserMsg("Ali Akbar"));

// if we want to give default value than username = "Ali" (Now the username can never equal to undefined)

// For making a function where paraemters are unknown then we use rest operator
function CalculateCartPrice(...num) {
  return num;
}

console.log(CalculateCartPrice(200, 400, 500, 5000));

// Passing objects in function
const User = {
  username: "Akbar",
  price: 22,
};

function handleObject(getObject) {
  console.log(
    `Username is ${getObject.username} and Price is ${getObject.price}`
  );
}

handleObject(User);

//Passing array in function
const myArray = [100, 500, 600, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myArray));
