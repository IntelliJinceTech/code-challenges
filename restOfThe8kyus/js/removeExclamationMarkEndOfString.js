// given string - always a string
// return string
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

//psuedocode
//? given a string
//? if last character of string is !, return splice of string without last index
//?

function remove(string) {
    if (string[string.length - 1] == "!") {
        return string.slice(0, string.length - 1);
    }
    return string;
}

console.log(remove("Hi!!!"));
console.log(remove("!!Hi"));
console.log(remove("Hi!"));
