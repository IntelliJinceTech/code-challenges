function stringy(size) {
    // given number
    // for loop up to given number
    // if loop counter is even, charat loop counter  should equal 1, otherwise 0
    // return string
    let str = "";
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            str += 1;
        } else {
            str += 0;
        }
    }
    return str;
}
