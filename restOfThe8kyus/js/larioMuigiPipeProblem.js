//parameters - array of numbers
//return - array of numbers that are consecutive between 0th index and the last index

//examples down below

function pipeFix(numbers) {
    let newNumbers = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        newNumbers.push(i);
    }
    return newNumbers;
}

console.log(pipeFix([1, 2, 3, 4, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]

console.log(pipeFix([-1, 4])); //[-1,0,1,2,3,4]
