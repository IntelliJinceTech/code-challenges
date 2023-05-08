// parameters - array of elements that consist of numbers
// return an array of the Max and Min numbers

// in the event of length 1, return the single element as both Max and Min (shouold be 2 elements in the returned array)
// TODO taking an array
// TODO   find the max, and min
// TODO   return [max,min]
// TODO 
// TODO 

function minMax(arr) {
  return [Math.min(...arr),Math.max(...arr)]

}

console.log(minMax([1,2,3,4,5])) // [1,5]
// console.log(minMax([2334454,5])) //--> [5,2334454]
// console.log(minMax([1])) // --> [1,1]
