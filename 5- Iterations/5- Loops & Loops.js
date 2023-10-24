const coding = ["js", "c", "c++", "py", "java"];

// Function
coding.forEach(function (item) {
  //   console.log(item);
});

// Arrow Function
coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// Common Operation in Data Fetching

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "mql4",
    languageFileName: "mq4",
  },
  {
    languageName: "mql5",
    languageFileName: "mq5",
  },
  {
    languageName: "pinescript",
    languageFileName: "pine",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "c",
    languageFileName: "c",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
});
