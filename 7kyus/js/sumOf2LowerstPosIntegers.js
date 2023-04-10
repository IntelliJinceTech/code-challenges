//Parameters:
// array - minimum of 4+ integers , length > 4, no floats,

//return
// returns single integer

//examples:
// input of [19,5,42,2,77] outputs ==> 7

// pseudocode

//? given an array
//?     sort array lowest to highest
//?     return sum of array[0] and array[1]
//?

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
