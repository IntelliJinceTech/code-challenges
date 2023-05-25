// input: array of 3 values
//      tail, body, head
// output: array of 3 values - ordered head, body, tail
//

function fixTheMeerkat(arr) {
	// take in array [0,1,2]
	// reorder 0th index and index 2
	// return
	return [arr[2], arr[1], arr[0]]
}

console.log(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail'])
