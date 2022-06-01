// ? PREP 
// P - String value case sensitive
// R - String double each letter/character 
// E - * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// P - pseudocode

function doubleChar(str) {
    // Given string 
    // Double each char 
    // return string

    return [...str].map((ele) => ele.repeat(2)).join('')
}

console.log(doubleChar('11223344!!__  '))