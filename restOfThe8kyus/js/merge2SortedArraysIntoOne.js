//parameters - 2 arrays - with no uniform sorting
//return - 1 array sorted from min to max
//  not necessarily consecutive
//examples

function mergeArraysSet(arr1, arr2) {
    let newSet = new Set();
    let newArr = arr1.concat(arr2);
    newArr.forEach((element) => {
        newSet.add(element);
    });
    return Array.from(newSet).sort((a, b) => a - b);
}

function mergeArrays(arr1, arr2) {
    arr2.forEach((element) => {
        if (arr1.indexOf(element) == -1) {
            arr1.push(element);
        }
    });
    return arr1.sort((a, b) => a - b);
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// --> should return [1,2,3,4,5,6,7,8]

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
// --> should return [1,2,3,4,5,6,7,8,9,10]

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
// --> should return [1,2,3,4,5,7,9,10,11,12]
