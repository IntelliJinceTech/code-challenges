// input - number, no floats, positive only, not including 0
// n sets of array of numbers,

function makeLatinSquares(n) {
	const result = []
	let rotate = n + 1
	for (let i = 1; i <= n; i++) {
		let arr = []
		let temp = rotate
		while (temp <= n) {
			arr.push(temp)
			temp++
		}
		for (let j = 1; j < rotate; j++) {
			arr.push(j)
		}
		rotate--
		result.push(arr)
	}
	return result
}

function makeLatinSquare(n) {
	//create empty array from 1 to n
	const array = []
	for (let i = 1; n >= i; i++) {
		array.push(i)
	}
	// slicing parts of array an map to return
	const returnArr = array.map((el, ind, arr) => {
		return [...arr.slice(ind + 1), ...arr.slice(0, ind + 1)]
	})
	return returnArr
}

console.log(makeLatinSquare(4), [
	[1, 4, 3, 2],
	[4, 3, 2, 1],
	[1, 2, 3, 4],
	[2, 1, 4, 3],
])
