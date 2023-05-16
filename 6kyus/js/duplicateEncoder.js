// PREP
// Parameters:
//      string word
// Return:
//      string of parenthesis
//      if character appears only once --> (
//      if character appears >1 --> )
//
// ignore capitalization, could be a space
//

//  TODO    Initalize an empty object
//  TODO    LOOP over the word
//  TODO        if character does not match property object, create key value pair of character:1
//  TODO        if character matches property in object, +=1 to value
//  TODO    LOOP over word again
//  TODO        if character has value >1, replace character with )
//  TODO        if character has value ===1, replace character with (

// compObj['a'] = 1
// compObj['a'] += 1
// console.log(compObj.hasOwnProperty('a'))
// console.log(compObj)
function duplicateEncode(word) {
	const compObj = {}
	for (let char of word.toLowerCase()) {
		compObj.hasOwnProperty(char) ? (compObj[char] += 1) : (compObj[char] = 1)
	}
	// console.log(compObj)
	return word
		.toLowerCase()
		.split('')
		.map(ele => {
			return compObj[ele] > 1 ? ')' : '('
		})
		.join('')
}

function duplicateEncoderCW(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
		})
		.join('')
}

console.log(duplicateEncode('din')) //"((("
console.log(duplicateEncode('recede')) // "()()()"
console.log(duplicateEncode('(( @')) // "))(("
