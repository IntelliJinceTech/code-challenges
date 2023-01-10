//! String manipulation

// takes in an array of strings --> any weirdness in the array input?
// outputs different string combinations dependent on length of array input

// length = 0 --> no one likes this
// length < 4 --> ...array likes this
// length >=4 --> array[0], array[1] and (rest of the array).length likes this

function likes(names) {
	let str = ''
	switch (names.length) {
		case 0:
			str = 'no one likes this'
			break
		case 1:
			break
		case 2:
			break
		case 3:
			break
		default:
			str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
			break
	}
	return str
}

// console.log(likes([]), `no one likes this`)
// console.log(likes(['Peter']), `Peter likes this`)
// console.log(likes(['Jacob', 'Alex']), `Jacob and Alex likes this`)
// console.log(likes(['Max', 'John', 'Mark']), `Max, John and Mark likes this`)
console.log(likes(['Max', 'John', 'Mark', 'Alex']), `    Expected outcome: Max, John and 2 others like this`)
console.log(likes(['Max', 'John', 'Mark', 'Alex', 'Jacob']), `    Expected outcome: Max, John and 3 others like this`)
