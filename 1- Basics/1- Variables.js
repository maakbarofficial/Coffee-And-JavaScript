const accountId = 144556;
let accountEmail = "akbar@google.com";
var accountPassword = "12345";

let accountState;

// accountId = 2; // const is not allowed to change, let & var can be changed
accountEmail = "ali@google.com";
accountPassword = "54321";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountState]);

/* const is used for constant but for declaration of variables we use var & let.
  Prefer not to use var beacuse of block & functional scope.
  So let is used for best practices */
