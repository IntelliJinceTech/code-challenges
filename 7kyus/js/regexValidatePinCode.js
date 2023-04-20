// pass in string or number - could be of any length and could be a number or string
// returns boolean true or false

function validatePIN(pin) {
    // todo convert to Number (try to at least)
    // todo check type so that it is a valid integer that is non-negative and non-float
    // todo check length of Number

    //return true or false
    let pinLength = pin.length
    if (pinLength != 4 && pinLength != 6) {
        return false
    }
    for (let i in pin) {
        if (pin[i] > '9' || pin[i] < '0') {
            return false
        }
    }
    return true
}

//     for (let i in pin) if (pin[i] > '9' || pin[i] < '0') return false
//     return true
// }

//! returns true
// console.log(validatePIN('1234'))
// console.log(validatePIN('123456'))
// console.log(validatePIN('000000'))
// console.log(validatePIN('0123'))

//! Returns false
console.log(validatePIN(12345))
console.log(validatePIN('a234'))
console.log(validatePIN('.234'))
console.log(validatePIN('-1234'))
console.log(validatePIN('-1.234'))
console.log(validatePIN('12.0'))
console.log(validatePIN('001.'))
console.log(validatePIN('123'))

//? random testing
// console.log('-1.1234' % 1)
// console.log(5 % 1)
// console.log('12.0'.includes('.'))
