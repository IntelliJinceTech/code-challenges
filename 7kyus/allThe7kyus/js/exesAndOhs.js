// function would intake parameters of:
//      string that could consist of x's and o's 
// returns boolean (true or false)
//      based on whether number of x's and o's equal per string parameter
// Examples include:
//? XO("ooxx") => true
//? XO("xooxx") => false
//? XO("ooxXm") => true
//? XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// given a string
// determine if x's and o's not present --> return true 
//      This could possibly be solved for anyways in logic
// create a counter for o's
// create a counter for x's
// make string all lower case
// split the string into an array and for Each of the elements within array, if matching x or o, increase counter for corresponding letter
// return true if x's and o's equal otherwise false
function XO(str) {
    let xCounter = 0;
    let oCounter = 0;
    str.toLowerCase().split('').forEach(element => {
        if (element === 'x') {
            xCounter++
        } else if (element === 'o') {
            oCounter++;
        }
    });
    return xCounter === oCounter
}


console.log(XO("ooxx")) // => true
// console.log(XO("xooxx")) // => false
// console.log(XO("ooxXm")) // => true
// console.log(XO("zpzpzpp")) // => true // when no 'x' and 'o' is present should return true
// console.log(XO("zzoo")) // => false