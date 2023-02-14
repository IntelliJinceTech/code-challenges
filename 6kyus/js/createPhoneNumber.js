// given:
//  array of 10 integers between 0 and 9
//  can be in any order
// return:
//  string
//  format in indexes: (012) 345-6789
//  make sure to include the space after the closing parenthesis

// TODO given an array of numbers
// TODO   organize groups of elements together
// TODO   display into desired format
// TODO 

function createPhoneNumber1st(numbers) {
  numbers=numbers.join('')
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx'
  for(let i = 0; i<numbers.length; i++) {
    format = format.replace('x',numbers[i])
  }
  return format;
}

// ? examples
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // => returns "(111) 111-1111"