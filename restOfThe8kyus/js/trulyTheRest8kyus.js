
// function digitize(n) {
//     return String(n).split('').reverse().map(Number)
// }

// console.log(digitize(348597))

function findNeedle(haystack) {
    return haystack.indexOf('needle') >= 0 ? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything"
}


function maps(x){
    return x.map(num => num*2)
}

const stringToNumber = function(str){
    return Number(str);
}

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function past(h, m, s){
    //milliseconds = 
    //second*1000 +
    //minute * 60 * 1000
    // hours * 60 * 60 * 1000
    return (s*1000) + (m*1000*60) + (h*60*60*1000)
}

