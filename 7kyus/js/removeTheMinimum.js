// parameters: array of numbers in any order, numbers
//
// return:
//  array of length -1 from input
//  a new array without the minimum rating
//  the order of elements should remain the same
//  if multiple elements of the same minimum, remove the first one that comes up
//
// examples below:

//TODO  find the smallest number and get the index
//TODO  splice the number out and return the new array
//TODO
//TODO
function removeSmallest(numbers) {
	let newArr = [...numbers]
	newArr.splice(newArr.indexOf(Math.min(...numbers)), 1)
	return newArr
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // [2,3,4,5]
console.log(removeSmallest([5, 3, 2, 1, 4])) //[5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]
