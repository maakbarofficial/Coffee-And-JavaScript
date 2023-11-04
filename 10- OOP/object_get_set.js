const User = {
  _email: "abc@abc.com",
  _password: "chai",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    return (this._email = value);
  },
};

const tea = Object.create(User);
console.log(tea.email);

// new is constructor function
// by default function are factory functions
