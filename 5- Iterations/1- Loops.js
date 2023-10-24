// for loop
// variable init -> condition check -> block scope -> iteration
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 7) {
    // console.log("7 is a Critiano Shirt Number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j} and Inner Loop : ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["Imran Khan", "Cristiano Ronaldo", "Misbah Ul Haq"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// Break and Continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 7) {
//     console.log("Detected 7");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 7) {
    console.log("Detected 7"); // 7 detect hoty hi skip hojayega continiue is basically ignore kro continue karo
    continue;
  }
  console.log(`Value of i is ${index}`);
}

// continue skip the condition and execute the further loop
// break stop the loop when condition becomes true
