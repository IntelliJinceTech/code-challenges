// P - Parameters
//? string
//? could be empty

// R - Return
//? Boolean
//?
// E - Examples
//?  "Dermatoglyphics" --> true
//?  "aba" --> false
//?  "moOse" --> false (ignore letter case)
// P - Pseudocode
//! Given a string
//! make string all lower case
//! if "" return false
//! if there are any repeating letters, non-consecutive or consecutive:
//!     return true
//! else
//!     return false

// function isIsogram(str) {
//     let stringCheck = str
//         .toLowerCase()
//         .split("")
//         .filter((ele, index, arr) => {
//             return arr.indexOf(ele) == index;
//         });
//     return str.length === stringCheck.length ? true : false;
// }

// set
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

//! Set is a different type of object. Only holds unique values

// console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
