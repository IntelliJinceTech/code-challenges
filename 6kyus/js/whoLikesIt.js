//! String manipulation

// takes in an array of strings --> any weirdness in the array input?
// outputs different string combinations dependent on length of array input

// length = 0 --> no one likes this
// length < 4 --> ...array likes this
// length >=4 --> array[0], array[1] and (rest of the array).length likes this

//?pseudocode
//
//
//
//
//

function likes(names) {
	return
}

console.log(likes([]), `no one likes this`)
console.log(likes(['Peter']), `Peter likes this`)
console.log(likes(['Jacob', 'Alex']), `Jacob and Alex likes this`)
console.log(likes(['Max', 'John', 'Mark']), `Max, John and Mark likes this`)
console.log(likes(['Max', 'John', 'Mark', 'Alex']), `Max, John and 2 others likes this`)
