// array of arrays input - each element of outer array is an array of 2 numbers
// element of 2 numbers denotes:
//  0 index = age
//  1 index = person's handicap

// returns an array of strings
// each person and person's handicap will be calculated into either "Open" or "Senior"
// things to note: handicap is lower if the player is better

// senior conditions: age >= 55 && handicap is >7
// if not senior --> then "Open"

function openOrSenior(data) {
	// ITERATE over data input
	// use Senior conditional
	// return array of strings based on senior/open conditional
}

console.log(
	openOrSenior([
		[18, 20],
		[45, 2],
		[61, 12],
		[37, 6],
		[21, 21],
		[78, 9],
	]),
	['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
)
