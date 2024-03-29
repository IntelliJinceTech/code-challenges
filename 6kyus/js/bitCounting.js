// takes in an integer and returns the number of bits represented as a number
// does not take in negative integers

// given input number
// convert to binary
// calculate bits from binary
let countBits = num => {
	let binary = num.toString(2)
	return binary
		.split('')
		.map(ele => Number(ele))
		.filter(Boolean).length
}

let countBitsCW = num => {
	let binary = num.toString(2)
	return binary.split('0').join('').length
}
console.log(countBitsCW(1234), `binary representation is 10011010010 and so the resulting bits should be 5`)
console.log(countBitsCW(4), `the binary representation is: 100`, `answer is ${1}`)
console.log(countBitsCW(7), `the binary representation is: 111`, 3)
console.log(countBitsCW(9), `the binary representation is: 1001`, 2)
