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

function isIsogram(str) {
    // let newArr = str.toLowerCase().split("");

    let stringCheck = str
        .toLowerCase()
        .split("")
        .filter((ele, index, arr) => {
            return arr.indexOf(ele) == index;
        });
    return str.length === stringCheck.length ? true : false;
}

// console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
