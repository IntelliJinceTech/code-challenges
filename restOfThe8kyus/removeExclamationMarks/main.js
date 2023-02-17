// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// take in a string
// split into array
// loop over array
// find ! marks 
// splice at index
// function removeExclamationMarks(str) {
//     let arr = str.split('');
//     let newArr = arr.filter((letter) => letter !== '!')
//     return newArr.join('');
// }

console.log(removeExclamationMarks('Hello World!!!'))

function removeExclamationMarks(str) {
    let newArr = str.split('').filter((letter) => letter !== '!')
    return newArr.join('');
}