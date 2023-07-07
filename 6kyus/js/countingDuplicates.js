// takes in a string - any unusual characters?
//  only alphabets and numeric digits
// returns number of distinct case-insensitive characters that occur more than once. (>1 or >=2)

// todo initiate an empty object
// todo iterate over length of the string
// todo     if character doesn't exist on object, create 'char': 1
// todo     if character does exist on object, add 1 to char
// todo loop over object
// todo     filter keys by those that have more than 1 in value

const duplicateCount = text => {}

console.log(duplicateCount('abced'), `the answer is ${0} - no characters repeats more than once`)
console.log(duplicateCount('aabBcde'), `the answer is ${2} - a occurs twice and b twice (b and B)`)
console.log(duplicateCount('indivisibility'), `the answer is ${1} - i occurs 6 times`)
console.log(duplicateCount('aA11'), `the answer is ${2} - a and 1`)
