// parameters - number integer of some length 
//  all inputs valid --> meaning?
// returns - number of digits - Number

//TODO  with parameter n, given that it is a valid number
//TODO  convert to string
//TODO  find length of string and return
function digits (n) {
  return `${n}`.length
}

console.log(digits(5)) // 1
console.log(digits(12345)) // 5

// other solutions
function digitsCW(n) {
  return n.toString().length;
}