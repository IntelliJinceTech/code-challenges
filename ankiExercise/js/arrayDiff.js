// parameters
//      array of numbers as first input
//      array of numbers as second input
// return
//      return array of numbers with all occurrences of number elements from second input removed
// examples
//      below
// pseudocode

function arrayDiff(mainArr, removeArr) {
	// TODO     LOOP over Main array
	// TODO         if elements equal to any elements in removeArr, remove
	// TODO
	return mainArr.filter(ele => {
		return !removeArr.includes(ele)
	})
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // [1,3]
