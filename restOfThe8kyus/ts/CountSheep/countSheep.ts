// outputs a number counting the trues in the array
// input is an array of boolean values, it can have null or undefined
//

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
	return arrayOfSheep.filter(Boolean).length
}

console.log(
	countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]),
	`should result in ${17}`
)
