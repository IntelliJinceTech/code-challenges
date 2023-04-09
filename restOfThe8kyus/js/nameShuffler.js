//given name string with space
// split by space
// return array.reverse.join

function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("tom jerry"));
