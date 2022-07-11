// parameter is an integer
// returning an array of integers
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//! argument to function is an integer
//! create a loop where each time
//!     2 to the power is incremented up by 1 until
//!     it is equal to the number in the argument
//!         each time pushing the number onto the array
//! return an array of numbers

function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }
    return arr;
}

// console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
