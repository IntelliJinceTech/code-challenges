//integer1, integer2
// integer 2 is always greater than integer1

// returns arry of integers inclusive of integer1 and integer 2 (if integer2 is a multiple of integer1)

// findMultiples(5,25) --> [5, 10, 15, 20, 25]

//? pseudocode
//? create an empty array
//? create a loop that initalizes with your integer1
//? each loop should add integer1 to itself and if integer1<=integer2, continue looping
//? if cumulative integer is > integer2, break;

function findMultiples(integer, limit) {
    const resultArr = [];
    for (let i = integer; i <= limit; i += integer) {
        // console.log(i);
        resultArr.push(i);
    }
    return resultArr;
}

console.log(findMultiples(5, 25));

console.log(findMultiples(4, 27));
