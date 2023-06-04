// practice area
function insertSort(arr) {
	// determine length of array
	// Iterate over length of array
	//      Assign a variable of the current element being considered. represents the element that we want to insert into the sorted portion of the array
	//      Assign another variable that represents the index of the last element in the sorted portion of the array (j)
	//      While Loop that continues as long as j hasn't reached beginning of array and the current element being considered is smaller than the element j in sorted portion
	//          shift element at position j to the right, making space for the 'current' element
	//          decrement value of j to move onto the previous element in the sorted portion of array
	//      insert current element into its correct position in the array - just after the last element we compared with in the while loop
	// return
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
