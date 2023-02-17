// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// squareSum([1,2]), 5)
// squareSum([0, 3, 4, 5]), 50)
// squareSum([]), 0)

//? psuedocode
//  square each element in the array
//  generate a new array based on the squared numbers
//  sum array-- reduce
//
//
// ! first Try
// function squareSum(numbers) {
//     return numbers.map(num => Math.pow(num,2))
//             .reduce((prev,current) => prev + current,0)
// }

//! best practice
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n)
//         {return (n*n) + sum;
//     }, 0)
// }

function squareSum(number) {
    return number.reduce((prev,curr) => {
        return (curr*curr) + prev 
    },0)
}


console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))