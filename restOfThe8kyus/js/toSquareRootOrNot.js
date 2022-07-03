//

function squareOrSquareRoot(array) {
    return array.map((ele) => {
        return Math.sqrt(ele) % 1 == 0 ? Math.sqrt(ele) : ele * ele;
    });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
