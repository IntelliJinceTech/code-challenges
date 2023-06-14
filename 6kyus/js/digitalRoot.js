// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// n parameter - any integer postive or negative
//
//integer n - could it be negative?
// outputs a single digit number max of 9
// iterates over digits until:
//  until single digit

// recursively call itself
// convert n to a string
// convert into an array
//   reduce into the sum of its digits
// call itself

// function digitalRoot(n) {
// 	while (String(n).length !== 1) {
// 		let newArr = String(n).split('')
// 		n = newArr.reduce((curr, acc) => Number(curr) + Number(acc))
// 	}
// 	return n
// }

function digitalRoot(n) {
	while (String(n).length !== 1) {
		n = String(n)
			.split('')
			.reduce((curr, acc) => Number(curr) + Number(acc))
	}
	return n
}

// function digitalRoot(n) {
//   if (String(n).length === 1) {
//     return n;
//   } else {
//     const sum = String(n).split('').reduce((curr, acc) => Number(curr) + Number(acc));
//     return digitalRoot(sum);
//   }
// }
console.log(digitalRoot(493193))
