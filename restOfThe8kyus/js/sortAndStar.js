// parameter of function is an array of strings
// return one string with *** between each letter
//twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )
//

//! given an array of strings
//!     sort the strings based on case sensitivity and ASCII values
//!     split the first string and add *** between each character
//! return the new first string

function twoSort(arrOfStr) {
    arrOfStr.sort();
    return arrOfStr[0].split("").join("***");
}

console.log([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
]);
