//  parameters: array of some amount of elements (numbers)
//  returns a number
//  TODO  given array of numbers as input
//  TODO    join them into a String
//  TODO    parseInt on the string - test
//  TODO

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''),2)
}



console.log(binaryArrayToNumber([0,0,0,1])) // 1
console.log(binaryArrayToNumber([0,0,1,0])) // 2
console.log(binaryArrayToNumber([1,1,1,1])) // 15
console.log(binaryArrayToNumber([1,0,1,1])) // 11

