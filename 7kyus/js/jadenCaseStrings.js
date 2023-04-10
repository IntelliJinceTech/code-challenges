// parameters:
//      String of words
// return:
//      String of words where each letter of first word is uppercase
// examples:
// "How can mirrors be real if our eyes aren't real" =="How Can Mirrors Be Real If Our Eyes Aren't Real"

//? Given a string
//? split the string into an array
//? make the first character of each element word uppercase
//? join the elements together no with the updated uppercase first letters

String.prototype.toJadenCase = function () {
    let words = this.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let updatedWords = words.join(" ");
    return updatedWords;
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
