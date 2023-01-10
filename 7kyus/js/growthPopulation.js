// 4 inputs all integers
// check to see if they are integers? Any funny behavior that we need to account for like floats? or negatives? edge cases for inputs?
// input order: (population at beginning of the year, percent growth, inhabitants coming or leaving each year, population (target) to equal or exceed)
// input order with variables:
//?     population at beginning of the year --> must be positive or 0
//?     percent growth --> floating, integer, positive or null, floating number
//?     inhabitants coming and going --> integer, positive or negative
//?     target population --> greater than or equal to p
function nbYear(p0, percent, aug, p) {
	// initialize array with p0 at index 0
	// do calculation and push to initialized array
	// check when population exceeds or equals target population
	// return index of the array
}

console.log(nbYear(1500, 5, 100, 5000), 15)
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10)
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94)

// console.log(Math.floor(1070 + 1070 * 0.02 + 50))
