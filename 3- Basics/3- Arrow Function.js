const user = {
  username: "akbar",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // Using this keyword for current context
    console.log(this);
  },
};

// user.welcomeMessage();

// user.username = "ali";
// // context of username change to ali
// user.welcomeMessage();

// console.log(this); //if we are in node environment we will get {} context if we run this in browser we will get many things

// function coffee() {
//   let username = "ali";
//   console.log(this);
//   console.log(username.this); // got undefined beacuse we can't get this direct in function... this only working in objects
// }

// coffee();

// const coffee = function () {
//   let username = "ali";
//   console.log(this);
//   console.log(username.this); // got undefined beacuse we can't get this direct in function... this only working in objects
// };

// coffee();

// Arrow Function
// const coffee = () => {
//   let username = "ali";
//   console.log(this); // got {} in console
//   console.log(username.this); // undefined
// };

// coffee();

// *************************** Arrow Function *****************************
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit return in Arrow Function
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2; // if curly braces used then we will use return keyword if we wrap this in parenthesis then no need of return keyword

// console.log(addTwo(2, 2));

const addTwo = (num1, num2) => ({
  username: "akbar",
}); // we can't return object without curley braces, for returning object we have to use curley braces

console.log(addTwo(2, 2));
