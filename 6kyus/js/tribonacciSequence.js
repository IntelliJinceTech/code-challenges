// given
//  2 different inputs
//    ? signature - starting point of the sequence
//    ? length of the desired sequence including the signature

//  TODO    initiate empty array with signature
//  TODO    LOOP until length n
//  TODO        start at index 3
//  TODO        add last 3 numbers in array
//  TODO        push to signature
//  TODO    combine array with signature array
//  TODO    return
//  TODO
// function tribonacci(signature, n) {
// 	let seqArr = [...signature] //[0,1,2]
// 	for (let i = 2; i < n - 1; i++) {
// 		let newArr = [seqArr[i - 2], seqArr[i - 1], seqArr[i]]
// 		seqArr.push(newArr.reduce((acc, curr) => acc + curr, 0))
// 	}
// 	return seqArr.slice(0, n)
// }

// let triboacciCW = (signature, n) => {
// 	for (var i = 0; i < n - 3; i++) {
// 		// iterate n times
// 		signature.push(signature[i] + signature[i + 1] + signature[i + 2]) // add last 3 array items and push to trib
// 	}
// 	return signature.slice(0, n) //return trib - length of n
// }

function tribonacci(signature, n) {
	for (let i = 2; i < n; i++) {
		signature.push(signature[i - 2] + signature[i - 1] + signature[i])
	}
	return signature.slice(0, n)
}

console.table(tribonacci([1, 1, 1], 10)) // [1,1,1,3,5,9,17,31,57,105]
console.table(tribonacci([0, 1, 1], 10)) // [0,1,1,2,4,7,13,24,44,81]
console.table(tribonacci([1, 1, 1], 1)) // [1]
console.table(tribonacci([300, 200, 100], 0)) // []
