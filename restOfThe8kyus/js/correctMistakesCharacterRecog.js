function correct(string) {
    return string.split('').map((ele) => {
        if (ele == '0') {
            return ele = 'O'
        } else if (ele == 5) {
            return ele = 'S'
        } else if (ele == 1) {
            return ele = 'I'
        } else {
            return ele
        }
    }).join('')
}

console.log(correct('L0ND0N'))