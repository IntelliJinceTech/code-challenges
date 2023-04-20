// takes in 2 strings made up of letters
// returns distinct string sorted from a-z?

function longest(s1, s2) {
    // todo test capabilities of Set type with characters
    // todo
    // todo
    let setLongest = new Set(s1 + s2)
    return Array.from(setLongest).sort().join('')
}

console.log(longest('aretheyhere', 'yestheyarehere')) //"aehrsty")
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')) //, "abcdefghilnoprstu")
console.log(longest('inmanylanguages', 'theresapairoffunctions')) //, "acefghilmnoprstuy")
