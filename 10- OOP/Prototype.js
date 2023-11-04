let myName = "Akbar";
let myChannel = "Coffee Aur Code";

// console.log(myName.trim().length);

let myHeros = ["cristiano", "misbah"];

let heroPower = {
  cristiano: "goat",
  misbah: "captian",

  getCristianoPower: function () {
    console.log(`Cristiano Power is ${this.cristiano}`);
  },
};

// Accessable to Objects, Array, Strings
Object.prototype.akbar = function () {
  console.log("akbar is in all objects");
};

// Accessable to only Array
Array.prototype.heyAkbar = function () {
  console.log("Akbar says Hello");
};

heroPower.akbar();
myHeros.akbar();

myHeros.heyAkbar();
// heroPower.heyAkbar();

// Inheritance

const User = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; // Outdated approach

// modern syntax of above approch
// TeachingSupport to Teacher
Object.setPrototypeOf(TeachingSupport, Teacher);

// Solving the problem mentioned on the top of the code

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();

// this ka matlab jis.... jo bola raha h jo call kr raha h uska context ya uska reference

"Akbar".trueLength();
"IceCoffee".trueLength();
