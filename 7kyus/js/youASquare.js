// P - Parameters
//? Parameter will be an integer
//? can be positive or negative
//? 0 could be a possibility
// R - Return 
//? Returns a boolean true or false 
//? 
//? 
// E - Examples
//? -1  =>  false
//?  0  =>  true
//?  3  =>  false
//?  4  =>  true
//? 25  =>  true
//? 26  =>  false
// P - Pseudocode
//? given an integer that can be 0, negative or positive
//? if negative or sqrt of argument is a decimal - return false
//? otherwise if squrt of argument is not a decimal - return true

//! first try
// let isSquare = function (num) {
//     if (num < 0) {
//         return false
//     } else if ((Math.sqrt(num) % 1 !== 0)) {
//         return false
//     } else {
//         return true
//     }
// }

//! refactor x1

// let isSquare = (num) => {
//     if (num < 0 || (Math.sqrt(num) % 1 !== 0)) {
//         return false
//     } else {
//         return true
//     }
// }

//! best solution
let isSquare = (num) => {
    return Math.sqrt(num) % 1 === 0
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(4))