// function parameters will be integers representing human years
//  always integers, non-negative, numbers greater than or equal to 1
// return an array of 3 elements. each element is a number
// examples:
//  humanYearsCatYearsDogYears(1), [1,15,15]
//  humanYearsCatYearsDogYears(2), [2,24,24]
//  humanYearsCatYearsDogYears(10), [10,56,64]
// ? given a parameter
// ? declare variables for both catYears and dogYears
// ? set both variables to 15
// ? if argument = 1, return array with [argument, catYears,dogYears]
// ? if argument = 2, add 9 to both variables
// ? if argument >2, loop through starting at 3, each iteration adding 4 to catYears, 5 to dogYears
// ? return [argument, catYears,dogYears]
// ?

let humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 15;
    let dogYears = 15;
    if (humanYears === 2) {
        return [humanYears, catYears + 9, dogYears + 9];
    } else if (humanYears > 2) {
        return [
            humanYears,
            catYears + 9 + 4 * (humanYears - 2),
            dogYears + 9 + 5 * (humanYears - 2),
        ];
    }
    return [humanYears, catYears, dogYears];
};
