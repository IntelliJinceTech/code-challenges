// takes in 3 integer values - check for strings or other values? no.
// returns boolean
// examples
//pseudocode
// check triangle sides
// only a triangle if:
//?     a+b>c
//?     a+c>b
//?     b+c>a
function isTriangle(a, b, c) {
    //todo
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2)); //true
console.log(isTriangle(7, 2, 2)); //false
