// string input
// Upper Camel Case
//  if first word's first letter is capitalized, keep it that way
// input string can either have dashes or underscores delimited

function toCamelCase(str) {
	// Determine if string includes - or underscore
	let returnString = ''
	if (str.includes('-')) {
		returnString = str.split('-').map((word, idx) => {
			if (idx > 0) {
				return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
			}
			return word
		})
		return returnString.join('')
	} else if (str.includes('_')) {
		returnString = str.split('_').map((word, idx) => {
			if (idx > 0) {
				return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
			}
			return word
		})
		return returnString.join('')
	}
	// Split on dash or underscore
	// loop over each element in array and capitalize first character starting from index 1
	// join
	// return string
}

console.log(toCamelCase('the-stealth-warrior'), 'theStealthWarrior')
console.log(toCamelCase('The_Templar_warrior'), 'TheTemplarWarrior')
console.log(toCamelCase('The-Templar-warrior'), 'TheTemplarWarrior')
