// P - Parameters
//? array of strings and non-negative integers
// R - Return 
//? returns a new array
//?     without only the non-negative integers
//?     type should be number

// E - Examples
//? [1,2,'a','b']) == [1,2]
// [1,'a','b',0,15]) == [1,0,15]
// [1,2,'aasf','1','123',123]) == [1,2,123]
// P - Pseudocode
//? Given array of strings and numbers
//? Return a new array that
//?     filters out typeof element is string
//?     filters out numbers > = 0

//! first iteration
// function filter_list(arr) {
//     return arr.filter((ele) => {
//         return typeof ele == 'number' && ele >= 0;
//     })
// }

//! second iteration
function filter_list(arr) {
    return arr.filter((ele) => typeof ele == 'number' && ele >= 0)
}

// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1, 'a', 'b', 0, 15]))
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

//reflections
// There is no need to cover the array element is non-negative since parameters cover that already