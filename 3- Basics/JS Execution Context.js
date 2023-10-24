// Javascript Execuation Context

// { } Global Execuation Context, this keyword refer to Global Execuation Context
// ( ) Functional Execuation Context
// Eval Execuation Context (in mongodb like things)

/*
let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


{JS File}
1 => Global Execuation Phase
2 => Memory Creation Phase (Creation Phase) e.g val1 = undefined, val2 = undefined, addNum -> defination, result1 = undefined, result2 = undefined
3 => Execuation Phase e.g. val1 = 10, val2 = 5, result1 = [new variable environment + execution thread] -> now 2 phases will repeat for this process (memory phase and execuation phase) `when its completed its deleted` "val1 = undefined, val2 = undefined, total undefined" -> "num1 = 10, num2 = 5, total = 15; now 15 will be return globally",
                                                result2 = [new variable environment + execution thread] -> now 2 phases will repeat for this process (memory phase and execuation phase) `when its completed its deleted` "val1 = undefined, val2 = undefined, total undefined" -> "num1 = 10, num2 = 2, total = 7; now 15 will be return globally" 
*/

/*

Call Stack -> LIFO

for visualization:
Chrome -> Source -> Snippts -> Call Stack



function one() {
    console.log("one")
    two()
}

function two() {
    console.log("two")
    three()
}

function three() {
    console.log("three")
}


one();
two();
three();



*/
