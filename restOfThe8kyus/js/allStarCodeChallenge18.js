// Parameters -> 
//? 2 string arguments 
//? 
//? second argument assumed to be only a single letter
// Return -->  
//? returns an integer
// Examples 
//? ("Hello", "o")  ==>  1
//? ("Hello", "l")  ==>  2
//? ("", "z")       ==>  0

// Pseudocode
//! Input of 2 string arguments
//! if first argument is falsey, return 0
//! filter based on second argument
//! take length of new array
//! 
function strCount(str, letter) {
    let arrStr = str.split('')
    if (arrStr.indexOf(letter) == -1) {
        return 0
    } else {
        return arrStr.filter(ele => ele === letter).length
    }


}

function strCount(str, letter) {
    return str.split(letter).length - 1
}