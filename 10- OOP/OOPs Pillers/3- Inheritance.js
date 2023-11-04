// Base class (superclass)
function Animal(name) {
  this.name = name;
}

// Method shared by all Animal instances
Animal.prototype.sayName = function () {
  console.log(`I am an animal named ${this.name}`);
};

// Subclass that inherits from Animal (subclass)
function Dog(name, breed) {
  // Call the superclass constructor with the 'call' method
  Animal.call(this, name);
  this.breed = breed;
}

// Set up the prototype chain for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix the constructor reference

// Method specific to Dog instances
Dog.prototype.bark = function () {
  console.log("Woof! Woof!");
};

// Create instances of the classes
const dog1 = new Dog("Buddy", "Golden Retriever");
const animal = new Animal("Generic Animal");

dog1.sayName(); // Output: "I am an animal named Buddy"
dog1.bark();

/* 
In JavaScript, you can achieve inheritance through prototype chaining. Here's an example that demonstrates inheritance:
In this example, we have an Animal base class (superclass) and a Dog subclass that inherits from the Animal class. The Animal class has a sayName method, and the Dog class has its own bark method.

To set up the inheritance, we use Object.create(Animal.prototype) to create a new prototype for the Dog class based on the Animal class's prototype. We also fix the constructor property on the Dog.prototype to point back to the Dog constructor function.

This allows instances of the Dog class to inherit methods and properties from the Animal class, while also having their own unique methods and properties. Inheritance is a fundamental concept in object-oriented programming, and JavaScript supports it through prototype-based inheritance.


*/
