//parameters --> float with one or 2 digits after decimal point
// returns --> return string with $xx.xx
//examples below

// TODO check number of digits after . 
// TODO   if none --> add 00
// TODO   if 1 --> add 0
// TODO   if 2 --> do nothing
// TODO Add $ to Stringified Number
// TODO Return String

function formatMoney(amount) { //3.1 length = 3
  let deciDigits = String(amount).length - 1 - String(amount).indexOf('.') //1 
  if(String(amount).indexOf('.') === -1) {
    return `$${amount}.00`
  } 
  if(deciDigits === 1 ) {
    return `$${amount}0`
  }
  return `$${amount}`
}

console.log(formatMoney(3)) // $3.00
console.log(formatMoney(3.1)) // $3.10

function formatMoneyCW(amount){
  return '$' + amount.toFixed(2);
}