//prep
//how to tell is lowercase or uppercase?
//check if both inputs are letters
//check letters for uppercase or lower case
//if letters are both the same case, return 1
//otherwise return 0

// function sameCase(a, b) {
//     if (!isLetter(a) || !isLetter(b) || a.includes(":") || b.includes(":")) {
//         return -1;
//     }
//     if (
//         isUpperCase(a) === isUpperCase(b) ||
//         isLowerCase(a) === isLowerCase(b)
//     ) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

function isLetter(string) {
    return isNaN(string);
}

function isUpperCase(string) {
    return string == string.toUpperCase();
}

function isLowerCase(string) {
    return string == string.toLowerCase();
}

function sameCase(a, b) {
    if (
        a.toUpperCase() === a.toLowerCase() ||
        b.toLowerCase() === b.toUpperCase()
    ) {
        return -1;
    } else if (
        (a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
        return 1;
    } else {
        return 0;
    }
}
console.log(sameCase("b", 2));
console.log(sameCase("C", "B"));
console.log(sameCase("A", "s"));
console.log(sameCase(" ", "z"));
console.log(sameCase("H", ";"));
// console.log(isLetter(":"));
