// Arguments will include a string of words
// Return an integer, typeof is number
// Example: "bitcoin take over the world maybe who knows perhaps"), 3)
// ! Given a string of words
// ! split string into an array
// ! Find the length of each element/word
// ! Return the max of said array

function findShort(str) {
    return Math.min(...str.split(" ").map((word) => word.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
