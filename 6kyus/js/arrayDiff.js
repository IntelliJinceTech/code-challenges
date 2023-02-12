// inputs
//      2 inputs:
//      first input: array of numbers - can be empty
//      second input: array of numbers - multiple elements or no elements

// output
//      one array or empty array if applicable

//? Ideal case: a.length and b.length >= 1
//! Edge cases:
//!     a.length ===0 --> returns []
//!     b.length ===0 --> returns a
//!     no elements of b in array a

// TODO LOOP over array input a
// TODO     LOOP over array input b
// TODO         If array input a matches with b, remove element and index
// TODO         Otherwise, move on
// TODO
// TODO
// TODO RETURN array a

function arrayDiff(a, b) {
	//
}

console.log(arrayDiff([1, 2], [1])) //[2]
console.log(arrayDiff([1, 2, 2], [1])) //[2,2]
console.log(arrayDiff([1, 2, 2, 2, 2, 3], [2])) //[1,3]
console.log(arrayDiff([], [1, 2])) //[]
console.log(arrayDiff([1, 2, 3], [1, 2])) //[3]
