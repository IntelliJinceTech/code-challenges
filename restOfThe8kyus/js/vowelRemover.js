//Parameters = string
// return = string
//examples: hello --> hll
// pseudocode
//? split string to array
//? arr method to filter out vowels
//? return string.join

const vowels = ["a", "e", "i", "o", "u"];

function shortcut(string) {
    let arrString = string.split("").filter((letter) => {
        console.log(vowels.indexOf(letter));
        return vowels.indexOf(letter) == -1;
    });
    return arrString.join("");
}

console.log(shortcut("hello"));
console.log(shortcut("codewars"));
