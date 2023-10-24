// Immediately Invoked Function Expressions (IIFE)
(function iifee() {
  console.log("DB Connected");
})();

// () first parenthesis is function
// () second parenthesis is execution call

// we can also use arrow function as iife
(() => {
  console.log("DB Connected Two");
})();

// we using iife we have to end iife with semicolon to end the code of the function

// declaring parameters in iife
((name) => {
  console.log(`DB Connected ${name}`);
})("MySQL");

// named iife
// (function iifee() {
//   console.log("DB Connected");
// })();

// unnamed iife
// (() => {
//   console.log("DB Connected Two");
// })();
