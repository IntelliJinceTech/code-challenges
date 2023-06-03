// practice area
function insertSort(arr) {
	// determine length of array
	// Iterate over length of array
	//  declare variable for element in position in loop
	//  declare variable for position - 1 in loop
	//  when (position-1) is greater than -1 AND element at selected position in for loop is less than the element of position-1
	//
}

// answer area
function insertionSort(inputArr) {
	let n = inputArr.length
	for (let i = 1; i < n; i++) {
		// Choosing the first element in our unsorted subarray
		let current = inputArr[i]
		// The last element of our sorted subarray
		let j = i - 1
		while (j > -1 && current < inputArr[j]) {
			inputArr[j + 1] = inputArr[j]
			j--
		}
		inputArr[j + 1] = current
	}
	return inputArr
}
