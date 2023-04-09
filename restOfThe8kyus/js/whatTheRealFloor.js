// parameters: integer, can be negative, no floats
//return: integer, can be negative, no floats
//examples:

//psuedocode:
//given an integer that can be positive or negative
// if given floor is above 13, return given floor - 2
//      else if given floor is above 0 return floor -1
//      else return given floor

function getRealFloor(n) {
    if (n > 13) {
        return n - 2;
    } else if (n > 0) {
        return n - 1;
    } else {
        return n;
    }
}

console.log(getRealFloor(1));
console.log(getRealFloor(0));
console.log(getRealFloor(4));
console.log(getRealFloor(15));
console.log(getRealFloor(-2));
console.log(getRealFloor(20));
