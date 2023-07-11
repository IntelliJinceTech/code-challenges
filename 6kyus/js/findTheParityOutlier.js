// array of numbers. will there always be elmenets? could it be empty?
// could it be negative?
// does 0 count as even? yes

// return an integer thats from the input
// text?
// notation -

// pseudocode
// given an array of integers
//  determine whether array is mostly even or mostly odd
// traverse array
// record whether num is even or odd, and append to correct odd/even array
// if length of evenCounter is less than that of oddCounter, then return element in numCounter
// return target element

function findOutlier(integers) {
	let evenCounter = []
	let oddCounter = []
	integers.forEach((ele, ind) => {
		ele % 2 === 0 ? evenCounter.push(ele) : oddCounter.push(ele)
	})
	return evenCounter.length > oddCounter.length ? oddCounter[0] : evenCounter[0]
}

// examples
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)
