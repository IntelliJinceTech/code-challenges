//takes in 2 input parameters of boolean type
//should return boolean true or false
//examples down below

function xor(a, b) {
    // TODO: conditional check
    // TODO:    if a = true, b = true, or a = false, b= false --> false
    // TODO:    else --> true;
    if ((a === true && b === true) || (a === false && b === false)) {
        return false;
    }
    return true;
}

//examples:
console.log(xor(false, false));
// --> false

console.log(xor(true, false));
// --> true

console.log(xor(false, true));
// --> true

console.log(xor(true, true));
// --> false
