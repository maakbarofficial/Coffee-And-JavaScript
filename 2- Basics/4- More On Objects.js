//const whatsappUser = new Object(); // singleton object
const whatsappUser = {}; // non singleton object

whatsappUser.id = "123abc";
whatsappUser.name = "Akbar";
whatsappUser.isLoggedIn = false;

// console.log(whatsappUser);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ali",
      lastname: "Akbar",
    },
  },
};

// accessing objects of object
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

// Combining two objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj5 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 } // not a way

// const obj3 = Object.assign({}, obj1, obj2); // best practice

// easy way is to use spread operator
const obj3 = { ...obj1, ...obj2, ...obj5 };

// Objects in array
const users = [
  {
    name: "Ali",
    age: 22,
  },
  {
    name: "Akbar",
    age: 23,
  },
];

// console.log(users[1]); // getting index 1 object of user array

// console.log(Object.keys(whatsappUser)); // getting all keys of object
// console.log(Object.values(whatsappUser)); // getting object values
// console.log(Object.entries(whatsappUser)); // every key is stores in array

// verifying that object has a key or not
// console.log(whatsappUser.hasOwnProperty("isLoggedIn"));
// console.log(whatsappUser.hasOwnProperty("isLogged"));

// Destructring
const course = {
  coursename: "javascript master",
  price: 999,
  courseinstructor: "zeeshan usmani",
};

// course.coursename; //not a good way to repeat this dot again & again

const { courseinstructor } = course;
const { courseinstructor: instructor } = course;

// console.log(courseinstructor);
// console.log(instructor);

// Data getting from api

// {
//   "name": "Ali",
//   "price": "free",
//   "cinstructor": "akbar",
// }

// [{}, {}, {}];
