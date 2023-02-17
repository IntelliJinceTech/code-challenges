// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//? input is an array
//? if input array === empty/input.length === 0 
//?     return []
//? OR input array  === null
//?     return []
//? 
//? positive array = []
//? negative array = []
//? if element is positive
//?     push to positive array
//? else if element is negative
//?     push to negative array
//? else 
//?     continue

// //! first try
// function countPositivesSumNegatives(input) {
//     let finalArr = [];
//     if(input === undefined || input === [] || input === null||input.length === 0) {
//         return finalArr;
//     }
    
//     const posArr = input.filter(num => num>0)
//     finalArr[0] = posArr.length;
//     const negArr = input.filter(num => num<0)
//     let sumNegatives = 0;
//     negArr.forEach(negativeEle => sumNegatives += negativeEle);
//     finalArr[1] = sumNegatives
    
//     return finalArr ;
//     // input.filter(num => {
//         //     num> 0 ? 
//         // })
// }

// console.table(countPositivesSumNegatives([0,0]))
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// // [10, -65];
// countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
// // [8, -50];  


//! first refactor
function countPositivesSumNegatives(input) {
    let finalArr = [];
    if(input === [] || input === null||input.length === 0) {
        return finalArr;
    } else {
        const posArr = input.filter(num => num>0)
        finalArr[0] = posArr.length;
        const negArr = input.filter(num => num<0)
        let sumNegatives = 0;
        negArr.forEach(negativeEle => sumNegatives += negativeEle);
        finalArr[1] = sumNegatives
        
        return finalArr ;
    }
}

console.table(countPositivesSumNegatives([0,0]))
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// [10, -65];
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
// [8, -50];  