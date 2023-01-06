// input perfect square integer
// ouput the next perfect square integer

function findNextSquare(sq) {
	// Sqrt the sq
	let num = Math.sqrt(sq)
	return num % 1 === 0 ? (num + 1) ** 2 : -1
	// check if integer
	// if not integer --> return -1
	// if integer --> return integer + 1 **2
}

console.log(Math.sqrt(625))
console.log(26 ** 2)

console.log(findNextSquare(121), `Expected Answer is ${144}`)
console.log(findNextSquare(625), `Expected Answer is ${676}`)
console.log(findNextSquare(114), `Expected Answer is ${-1}`)
