class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const akbar = new User("Akbar");
// console.log(akbar.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iPhone", "i@phone.com");
// console.log(iPhone.createId());

// Static is not giving access to any child

// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.
