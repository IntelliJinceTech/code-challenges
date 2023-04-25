//? Prep

// parameters
  // string parameter
  // need to check? 
//  return 
  // string reversed 

//examples below
//pseudocode
//  todo  .reverse only works on arrays
//  todo  split by space into an array
//  todo  reverse each word 
//  todo  join the array back into a string using the space as the separator

// function reverseWords(str) {
//   let newStr = str.split(' ')
//   return newStr.map(word => {
//     return word.split('').reverse().join('')
//   })
//   .join(' ')
// }
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords('chris')) // sirhc
console.log(reverseWords('double  spaces')) // elbuod  secaps
console.log(reverseWords('a b c d')) // a b c d 