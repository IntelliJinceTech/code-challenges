// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr) {
    return arr.reduce((acc, curr) => {
        return Number(acc) + Number(curr)
    }, 0)
}

console.log(sumMix([9, 3, '7', '3']))