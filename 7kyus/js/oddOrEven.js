// given an array of integers , negative or positive are all fair game
//  return a string either "odd" or "even"

// input can be empty

function oddOrEven(arr) {
  return arr.reduce(((acc,curr) => acc + curr),0) % 2  === 0? "even" : 'odd'
}
// TODO given array of sum integers
// TODO check if array has elements --> if not, return even
// TODO   obtain sum
// TODO   if 0 --> even
// TODO   return even or odd depending on sum


// examples
console.log(oddOrEven([0])) //even
console.log(oddOrEven([])) //even
console.log(oddOrEven([0,1,4])) // odd
console.log(oddOrEven([-1023, 1, -2])) // even
