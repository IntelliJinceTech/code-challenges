// string of words with a combination of letters and a number
// should not expect to have more than one number digit per word - 1 thru 9
// output should still include the number in the word
// if input empty, output should be empty

// separate words of the string into an array separated by the spaces
// filter out numbers
// add words of said numbers to key
// sort and assign words to sorted numbers
function order(words) {
	const wordKey = {}
	words.split(' ').map(ele => {
		// let num = ele.split('').filter(Number)
		// wordKey[num] = ele

		wordKey[ele.split('').filter(Number)] = ele
	})
	return Object.values(wordKey).join(' ')
}

console.log(order('is2 Thi1s T4est 3a'), 'the answer is: ', 'Thi1s is2 3a T4est')
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'the answer is: ', 'Fo1r the2 g3ood 4of th5e pe6ople')
console.log(order(''), 'the answer is: ', '', 'empty input should return empty string')
