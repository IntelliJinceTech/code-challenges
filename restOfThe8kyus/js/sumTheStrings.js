function sumStr(a, b) {
    //? a, b strings
    //? convert both to numbers
    //? sum them
    //? convert to string
    //? return result
    // return String([a, b].reduce((acc, curr) => Number(acc) + Number(curr)));

    return String(Number(a) + Number(b));
}

console.log(sumStr("4", "5"));
