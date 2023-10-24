const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and current val: ${currval} `);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 3999,
  },
  {
    itemName: "DataScience Course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
