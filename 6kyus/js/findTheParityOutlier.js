// array of numbers. will there always be elmenets? could it be empty?
// could it be negative?
// does 0 count as even? yes

// return an integer thats from the input
// text?
// notation -

// pseudocode
// given an array of integers
//  determine whether array is mostly even or mostly odd
//      takes 3 loops to understand whether its even or odd
//      initialize counter for counting even/odd.
//      when even counter gets to 2 and iterations = 3 --> determines either even or odd
//  use traversing method to find the opposite
// if array is even, find odd
// if array is odd, find even
// return target element

function findOutlier(integers) {
	//your code here
}

// examples
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)
