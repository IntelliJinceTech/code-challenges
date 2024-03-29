// input is a positive integer
// return single digit integer

// multiplicative persistence is number of times you must multiply the digits in num until you reach a single digit
// if num is single digit already then it should return 0

function persistence(num) {
	// pseudocode:
	// create counter
	// create a while loop that only runs until num is less than 10
	//  convert num to string
	//  string to array
	//  reduce to new num
	// return num
	let counter = 0
	while (num > 9) {
		num = String(num)
			.split('')
			.reduce((acc, curr) => acc * curr)
		counter++
	}
	return counter
}

console.log(persistence(39), 3)
// console.log(persistence(999), 4)
