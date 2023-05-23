// start and end numbers as parameters
//      start number is always less than end number
//      negatives are allowed
//      start and end numbers are both inclusive
// return should be a number - it can have 5 in it
//      it should be the count of all numbers without 5

function dontGiveMeFivebeg(start, end) {
	// initialize an array of numbers between start and end numbers
	let initArr = []
	for (let i = start; i <= end; i++) {
		initArr.push(i)
	}
	// LOOP over array
	const resultArr = initArr.filter((num, ind) => {
		// Need to remove any numbers with a 5 in it
		return String(num).split('').indexOf('5')
	})
	// map, or filter
	// .length method to count numbers
	return resultArr
}

function dontGiveMeFive(start, end) {
	let count = 0
	for (let i = start; i <= end; i++) {
		if (!String(i).includes('5')) {
			count++
		}
	}
	return count
}

console.log(dontGiveMeFive(1, 9), 8)
console.log(dontGiveMeFive(4, 16), 11)
