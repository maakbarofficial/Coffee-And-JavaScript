// const coding = ["js", "c", "c++", "py", "java"];

// const values = coding.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// console.log(values);

// For Each is not returning a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => (num > 4)); both above will return but below will not return
// curly braces started a scope so we must have to return otherwise no need for return keyword in one liner and parenthesis
// This is a mistake usually commit
const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

const newNumArr = [];

myNums.forEach((num) => {
  if (num > 5) {
    newNumArr.push(num);
  }
});

// console.log(newNumArr);

const Books = [
  {
    title: "Book One",
    genre: "Programming",
    publish: 2021,
  },
  {
    title: "Book Two",
    genre: "History",
    publish: 2022,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 2023,
  },
  {
    title: "Book Four",
    genre: "Programming",
    publish: 2018,
  },
  {
    title: "Book Five",
    genre: "Programming",
    publish: 2020,
  },
];

// const userBooks = Books.filter((bk) => bk.genre === "History");
const userBooks = Books.filter((bk) => {
  return bk.publish > 2020 && bk.genre === "History";
});

console.log(userBooks);
