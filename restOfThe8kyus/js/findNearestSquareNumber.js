// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

//? Parameters
// positive integer
//
//? Return
// positive integer
//? Examples
// given 111, will return 121
// given 144, will return 144
//
//
//? Pseudocode
// given a positive integer
// check if sqrt is integer
//if it is, return input
// if not, sqrt and round up or down and return closest squared integer

function nearestSq(n) {
    let result = Math.sqrt(n);
    return result % 1 === 0 ? n : Math.round(result) ** 2;
}
