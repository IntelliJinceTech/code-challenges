//  parameters: 2 numbers, can they be negative?
//  returns binary with type String
//  add two numbers together and converts to binary form. Return binary form as type String

function addBinary(num1, num2) {
    return (num1 + num2).toString(2)
}

console.log(addBinary(1, 1)) //10

console.log(addBinary(5, 9)) //1110
