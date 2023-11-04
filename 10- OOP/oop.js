const user = {
  username: "Akbar",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// this keyword is use for current context

// console.log(this); // {} nothing in this in global context
// if we do this in browser than browser and window context will be available
// currently we are using Nodejs

// if i want to make more users for this constructor function is used
// its not good to use user, user2, user3 etc

// const promiseOne = new Promise(); // new is constructor function and use for new context
// const date = new Date(); // new is constructor function and use for new context

function User(username, loginCount, isLoggedIn) {
  this.username = username; // (can be written as) myusername= username
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // return by default
}

const userOne = new User("Ali Akbar", 12, true);
const userTwo = new User("New User", 11, false);
console.log(userOne.constructor);
console.log(userTwo);

// Usertwo overwrites Userone
// so we have to use "new" keyword
// constructor function give use new instance everytime

/*
    1) create new empty instance which is new object
    2) constructor function has been called due to "new" keyword and backed the all arguments
    3) arguments have been injected
    4) arguments received in function
*/
