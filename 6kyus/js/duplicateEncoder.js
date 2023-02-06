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

function duplicateEncode(word) {
	//  TODO    Initalize an empty object
	//  TODO    LOOP over the word
	//  TODO        if character does not match property object, create key value pair of character:1
	//  TODO        if character matches property in object, +=1 to value
	//  TODO    LOOP over word again
	//  TODO        if character has value >1, replace character with )
	//  TODO        if character has value ===1, replace character with (
}

console.log(duplicateEncode('din')) //"((("
console.log(duplicateEncode('recede')) // "()()()"
