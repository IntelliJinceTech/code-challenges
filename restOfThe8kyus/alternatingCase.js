String.prototype.toAlternatingCase = function () {
    return this.split('').map((val, ind) => {
        if (val == val.toLowerCase()) {
            return val = val.toUpperCase()
        } else if (val == val.toUpperCase()) {
            return val = val.toLowerCase()
        }
    }).join('')
}

console.log("hello world".toAlternatingCase())