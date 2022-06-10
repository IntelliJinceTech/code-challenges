// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// P - Parameters
// R - Return 
// E - Examples
// P - Pseudocode

//! string parameter of some length
//! return string
//! incrementing count of each character of string from 1 to end- no limit
//! between character is a hypen
//! first letter of each new segment is capitalized
//? accum("abcd") -> "A-Bb-Ccc-Dddd"
//? accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//? accum("cwAt") -> "C-Ww-Aaa-Tttt"

//* Given a string parameter
//* split string into an array[a,b,c,d]
//* loop or repeat each character of the string by index + 1 times  (map?)
//* [a,bb,ccc,dddd]
//* 
//* join elements with hypen
//* return
//* 

function accum(s) {
    // console.log(s.split(''))
    return s.split('')
        .map((strChar, index) => {
            return strChar[0].toUpperCase() + strChar.toLowerCase().repeat(index)
        })
        .join('-')
}

// console.log(accum('abcd'))
console.log(accum('RqaEzty'))