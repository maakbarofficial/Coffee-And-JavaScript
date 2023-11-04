// Define an abstract class or interface
function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate an abstract class.");
  }
}

// Define an abstract method
Shape.prototype.calculateArea = function () {
  throw new Error("Subclasses must implement calculateArea method.");
};

// Create concrete subclasses
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calculateArea = function () {
  return Math.PI * this.radius * this.radius;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};

// Instantiate concrete objects
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.calculateArea()); // Output: 78.53981633974483
console.log(rectangle.calculateArea()); // Output: 24

/* 

Abstraction in JavaScript, as in many programming languages, involves creating abstract classes or interfaces to define a set of methods or properties that must be implemented by concrete classes. While JavaScript doesn't have built-in support for abstract classes or interfaces, you can achieve a form of abstraction using a combination of functions and objects. Here's a simple example of abstraction in JavaScript:

In this example, we define an abstract class Shape with an abstract method calculateArea. Concrete subclasses Circle and Rectangle inherit from the Shape class and provide their own implementations of the calculateArea method.

The Shape constructor contains a safeguard to prevent direct instantiation of the abstract class. This way, you ensure that concrete subclasses must implement the required methods. This is a basic form of abstraction in JavaScript, although it's not as strict as what you might find in languages that natively support abstract classes and interfaces.



*/
