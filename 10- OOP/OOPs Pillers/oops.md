## Encapsulation

Encapsulation involves bundling data (attributes) and methods (functions) that operate on that data into a single unit called an object. Private and public access to data can be controlled.

### Example:

```javascript
function Person(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  // Public methods to access and modify private variables
  this.getName = function () {
    return _name;
  };
  this.setName = function (newName) {
    if (typeof newName === "string") {
      _name = newName;
    }
  };
  this.getAge = function () {
    return _age;
  };
  this.setAge = function (newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      _age = newAge;
    }
  };
}

const person = new Person("Alice", 30);
console.log(person.getName()); // Output: "Alice"
person.setAge(35);
console.log(person.getAge()); // Output: 35
```

## Inheritance

Inheritance allows one class to inherit properties and methods from another class. JavaScript achieves inheritance through prototype chaining.

````markdown
### Example:

```javascript
// Base class (superclass)
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(`I am an animal named ${this.name}`);
};

// Subclass that inherits from Animal (subclass)
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.sayName(); // Output: "I am an animal named Buddy"
```
````

## Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. Methods with the same name in different subclasses can have different implementations.

````markdown
### Example:

```javascript
function Shape() {
  this.getType = function () {
    return "Shape";
  };
  this.getArea = function () {
    return 0;
  };
}

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

function Rectangle(width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
  this.getType = function () {
    return "Rectangle";
  };
  this.getArea = function () {
    return this.width * this height;
  };
}

function printInfo(shape) {
  console.log(`Type: ${shape.getType()}`);
  console.log(`Area: ${shape.getArea()}`);
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
printInfo(circle);     // Output: Type: Circle, Area: 78.54...
printInfo(rectangle);  // Output: Type: Rectangle, Area: 24
```
````

## Abstraction

Abstraction involves creating abstract classes or interfaces to define a set of methods or properties that must be implemented by concrete classes. While JavaScript doesn't have built-in support for abstract classes or interfaces, you can achieve a form of abstraction.

````markdown
### Example:

```javascript
// Define an abstract class
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

console.log(circle.calculateArea()); // Output: 78.54...
console.log(rectangle.calculateArea()); // Output: 24
```
````
