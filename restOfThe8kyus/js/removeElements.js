// Parameters -> array
// Return --> Return 
// Examples 
// Pseudocode
// Given an array into the function
// remove index and element at every odd index
// return array

function removeEveryOther(arr) {
    return arr.filter((ele, ind) => {
        if (ind % 2 === 0) {
            return ele
        }
    })
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))