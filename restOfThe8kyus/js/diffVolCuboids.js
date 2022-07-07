function findDifference(a, b) {
    return Math.abs(
        a.reduce((acc, num) => acc * num) - b.reduce((acc, num) => acc * num)
    );
}

// ([2, 2, 3], [5, 4, 1]) // 8

console.log(findDifference([2, 2, 3], [5, 4, 1]));
