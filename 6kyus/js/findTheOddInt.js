// input array of integers
//  negatives, what does 0 count as?
// return the integer that appears odd number of times
//  always be at least one integer that appears an odd number of times

// todo given array of integers
// todo     count number of times an integer appears
// todo     review the counts and pick the one that satisfies:
// todo         number of times in arr % 2 === 1
function findOdd(arr) {
	let countObj = {}
	arr.map(ele => (!countObj.hasOwnProperty(ele) ? (countObj[ele] = 1) : countObj[ele]++))
	for (const num in countObj) {
		if (countObj[num] % 2 === 1) {
			return Number(num)
		}
	}
}

console.log(findOdd([4, 4, 6]), 6)
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4)
console.log(findOdd([1, 2, 2, 3, 3]), 1)
