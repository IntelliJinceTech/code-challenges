// input string text - can have spaces , only alphabet
// returns a string of numbers dilineated by spaces. spaces from the input don't count

function alphabetPosition(text) {
	// pseudocode
	// initialize empty array / object
	// if using array: create array - numbers of letters would be i + 1
	// const alphabetRecord = 'abcdefghijklmnopqrstuvwxyz'.split('')
	// const returnArr = text.split('').map(char => {
	// 	if (alphabetRecord.includes(char)) {
	// 		return alphabetRecord.indexOf(char) + 1
	// 	}
	// })
	// return returnArr
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetTable = {}

	alphabet.split('').map((char, ind) => {
		return (alphabetTable[char] = ind + 1)
	})

	return text
		.toLowerCase()
		.split('')
		.map(letter => {
			return alphabetTable[letter]
		})
		.filter(Boolean)
		.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."), '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11')
