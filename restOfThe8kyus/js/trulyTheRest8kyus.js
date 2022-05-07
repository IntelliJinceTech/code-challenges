
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

function lovefunc(flower1, flower2){
    return ((flower1 % 2 == 0 && flower2 % 2 ==1) || (flower2 % 2 == 0 && flower1 % 2 ==1) ) ? true : false;
}

function check(arr, x) {
    return arr.includes(x)
}

function find_average(array) {
    if(array.length ===0) {
        return 0
    } else {
        return array.reduce((acc,curr)=> acc + curr,0)/array.length

    }
    
}

function fakeBin(str){
    return str.split('').map((digit => Number(digit) < 5 ? '0': '1')).join('')
}


const reverseSeq = n => {
    let arr = []
    for(let i = n; i >0; i--) {
        arr.push(i)
    }
    return arr
  };