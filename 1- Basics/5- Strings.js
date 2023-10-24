const name = "Akbar";
const gitRepo = 50;

// console.log(name + " " + gitRepo + " value"); Outdated string writing method

// console.log(`Hello my name is ${name} and my Git Repos are ${gitRepo}`);

// new is for getting object
const gameName = new String("Clash Royale");

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("y"));

const newGameName = gameName.substring(0, 5);
const anotherGameName = gameName.slice(-12, 5);

// console.log(anotherGameName);

const newStringOne = "          Ali         ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://aliakbar.com/project%20one";

console.log(url.includes("lia"));

console.log(url.replace("%20", "-"));
