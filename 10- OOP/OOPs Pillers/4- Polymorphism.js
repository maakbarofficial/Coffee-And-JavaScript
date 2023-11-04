// Base class (superclass)
function Shape() {
  this.getType = function () {
    return "Shape";
  };

  this.getArea = function () {
    return 0;
  };
}

// Subclass Circle that overrides methods
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;

  this.getType = function () {
    return "Circle";
  };

  this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };
}

// Subclass Rectangle that overrides methods
function Rectangle(width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;

  this.getType = function () {
    return "Rectangle";
  };

  this.getArea = function () {
    return this.width * this.height;
  };
}

// Polymorphic function that accepts any Shape
function printInfo(shape) {
  console.log(`Type: ${shape.getType()}`);
  console.log(`Area: ${shape.getArea()}`);
  console.log();
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

printInfo(circle); // Output: Type: Circle, Area: 78.53981633974483
printInfo(rectangle); // Output: Type: Rectangle, Area: 24

/* 
Polymorphism in JavaScript can be achieved through method overriding and dynamic dispatch. It allows objects of different classes to be treated as objects of a common superclass. Here's an example that demonstrates polymorphism in JavaScript:

In this example, we have a base class Shape with getType and getArea methods, and two subclasses Circle and Rectangle. Both subclasses override the getType and getArea methods to provide their own implementations.

The printInfo function accepts a Shape object as its argument, and it calls getType and getArea on that object. This demonstrates polymorphism because the same method names are used, but the behavior depends on the actual object's class. When you call printInfo with a Circle or Rectangle object, it correctly dispatches to the overridden methods in those subclasses, displaying the appropriate type and area.

Polymorphism allows you to work with objects in a more generic way, treating objects of different classes as if they were instances of a common superclass, as long as they implement the same interface (i.e., have methods with the same names).


*/
