// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// Parameters
//* number is passed in. could be a float.
// return
//* boolean true/false
// Examples
// assert.strictEqual(testEven(0), true, "testEven for 0");
//     assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
//     assert.strictEqual(testEven(1), false, "testEven for 1");
//     assert.strictEqual(testEven(2), true, "testEven for 2");
//     assert.strictEqual(testEven(-4), true, "testEven for 2");
// Pseudocode
// * given a number is passed in
// * if number is a float, or odd --> return false
// * if number is even, --> return true

function testEven(n) {
    n % 2 === 0;
}

console.log(testEven(0.5));
console.log(testEven(2));
console.log(testEven(5));
console.log(testEven(-4));
console.log(testEven(-5));
