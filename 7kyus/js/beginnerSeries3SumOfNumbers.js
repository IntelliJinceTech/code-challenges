//parameters = 2 inputs, integer, postive or negative
//return single integer
// examples --> below

//? pseudocode
//? initialize sum of 0
//? loop from a to b and including b
//? each iteration should add to sum

function getSum(a, b) {
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSum(0, -1));

//Gauss
const GetSumGauss = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
};
