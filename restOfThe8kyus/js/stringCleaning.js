// parameter - string - can contain numbers, could have lowercase or uppercase, and could have symbols and could have spaces
// returns string with possibility of symbol characters - no numbers

// TODO iterate over string argument
// TODO check if character is a number
// TODO remove numbers
// TODO return string
function stringClean(s) {
  let newStr = "";
  for(let i = 0; i<s.length; i++) {
    if(s[i] === ' ') {
      newStr+= ' '
    } else if(isNaN(s[i])) {
      newStr+= s[i];
    }
  }
  return newStr;
}

console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"))//, "A A! AAA   JKL@!!!"))