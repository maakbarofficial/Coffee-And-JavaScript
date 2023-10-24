let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); date is in ms

// console.log(Math.floor(Date.now() / 1000)); //date to sec

let newDate = new Date();

// console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
