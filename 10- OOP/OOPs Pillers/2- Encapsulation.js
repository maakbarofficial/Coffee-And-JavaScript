function Person(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  // Public method to get the name
  this.getName = function () {
    return _name;
  };

  // Public method to set the name
  this.setName = function (newName) {
    if (typeof newName === "string") {
      _name = newName;
    } else {
      console.error("Name must be a string.");
    }
  };

  // Public method to get the age
  this.getAge = function () {
    return _age;
  };

  // Public method to set the age
  this.setAge = function (newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      _age = newAge;
    } else {
      console.error("Age must be a non-negative number.");
    }
  };
}

// Create a Person instance
const person = new Person("Alice", 30);

// Access and modify the properties through public methods
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30

person.setName("Bob");
person.setAge(35);

console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 35

/* 
In JavaScript, encapsulation can be achieved through the use of closures and private variables. You can hide certain data and methods within the scope of a constructor function, making them inaccessible from the outside. Here's an example demonstrating encapsulation in JavaScript:

In this example, we've created a Person constructor function that encapsulates the name and age properties within private variables _name and _age. Public methods like getName, setName, getAge, and setAge provide controlled access to these private variables, allowing you to enforce certain rules and validations when setting or getting the values.

Encapsulation helps to hide the internal implementation details of an object and provides a clear interface for interacting with it. This is a fundamental concept in object-oriented programming, and JavaScript allows you to achieve it through closures and private variables.


*/
