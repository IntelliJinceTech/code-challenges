//parameters - 2 arrays - with no uniform sorting
//return - 1 array sorted from min to max
//  not necessarily consecutive
//examples

function mergeArrays(arr1, arr2) {
    //todo concat arrays
    //todo add to new Set
    //todo convert set to array
    //todo return array
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// --> should return [1,2,3,4,5,6,7,8]

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
// --> should return [1,2,3,4,5,6,7,8,9,10]

console.log(mergeArrays([[1, 3, 5, 7, 9, 11, 12]], [1, 2, 3, 4, 5, 10, 12]));
// --> should return [1,2,3,4,5,7,9,10,11,12]
