class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A New Course was added by ${this.username}`);
  }
}

const coffee = new Teacher("coffee", "coffee@example.com", 123);
coffee.addCourse();

const tea = new User("tea");
tea.logMe();

// console.log(coffee === tea);

console.log(coffee instanceof Teacher);
console.log(coffee instanceof User);

console.log(tea instanceof Teacher);
console.log(tea instanceof User);
