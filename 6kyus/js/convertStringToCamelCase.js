// string input
// Upper Camel Case
//  if first word's first letter is capitalized, keep it that way
// input string can either have dashes or underscores delimited

function toCamelCase(str) {
	// Determine if string includes - or underscore
	// if (str.includes('-')) {
	// 	return str
	// 		.split('-')
	// 		.map((word, idx) => {
	// 			if (idx > 0) {
	// 				return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
	// 			}
	// 			return word
	// 		})
	// 		.join('')
	// } else if (str.includes('_')) {
	// 	return str
	// 		.split('_')
	// 		.map((word, idx) => {
	// 			if (idx > 0) {
	// 				return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
	// 			}
	// 			return word
	// 		})
	// 		.join('')
	// }

	const words = str.split('-').join('_').split('_')

	for (let i = 1; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1)
	}

	return words.join('')
}

// Split on dash or underscore
// loop over each element in array and capitalize first character starting from index 1
// join
// return string
console.log(toCamelCase('the-stealth-warrior'), 'theStealthWarrior')
console.log(toCamelCase('The_Templar_warrior'), 'TheTemplarWarrior')
console.log(toCamelCase('A_Pippi_isEvil'), 'APippiIsEvil')
console.log(toCamelCase('a_pippiIsPippi'), 'aPippiIsPippi')
