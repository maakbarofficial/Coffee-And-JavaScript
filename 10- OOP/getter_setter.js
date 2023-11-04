class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    return (this._email = value);
  }

  get password() {
    return `${this._password}akbar`;
  }

  set password(value) {
    return (this._password = value);
  }
}

const akbar = new User("akbar@example.com", "abef");

console.log(akbar.password);
console.log(akbar.email);
