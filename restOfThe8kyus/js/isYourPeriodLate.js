// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

//Parameters
// * 2 date objects
//* integer
//Return
//* Boolean true or false
//Example
// periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)
// assert.isTrue(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)
//Pseudocode

function periodIsLate(last, today, cycleLength) {
    return (today - last) / (1000 * 60 * 60 * 24) > cycleLength;
}
