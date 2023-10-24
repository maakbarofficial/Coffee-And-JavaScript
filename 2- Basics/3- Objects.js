// singleton
// Object.create;

// object literals
const mySym = Symbol("key1");
const User = {
  name: "Akbar",
  "full name": "Ali Akbar",
  [mySym]: "mykey1", // for getting symbol type
  age: 22,
  email: "akbar@gmail.com",
  location: "Mansehra",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"],
};

// console.log(Users.email);
// console.log(Users.[email]); will give error
// console.log(Users["email"]);
// console.log(Users["full name"]); // squre notation is only way to access this
// console.log(typeof User.mySym); // for accesing symbol in object wrap it in square brackets
// console.log(User[mySym]);

// Changing Object values
// console.log(User.email);
// User.email = "akbar@google.com";
// console.log(User.email);

// Freezing Object so the values can't be changed
// Object.freeze(User);

// User.email = "akbar@twitter.com";
// console.log(User);

User.greeting = function () {
  console.log("Hello User");
};

// console.log(User.greeting);
// console.log(User.greeting());

User.greetingTwo = function () {
  console.log(`Hello User, ${this.name}`);
};

console.log(User.greeting());
console.log(User.greetingTwo());

// we can access objects elements from dot notation and bracket notation,
// at some special cases like we access with square brackets
