// string parameters
// return string with the last 4 characters as is from the parameter
//    what to do with less than 4 characters? just return 4 characters
// todo if string has less than 4 characters:
// todo return string as is when the parameter has <= 4 characters
// todo else 
// todo   slice from the beginning of the string to -4 index from the end of the string
// todo   store in new variable slicedString
// todo   slice the end of the string from the 4th from the end and store in another variable
// todo   manipulate those characters to replace each character with '#'
// todo       split into array and loop over to change each character to # 
// todo  return the concatenation of the manipulated sliced string and the variable that has 4 characters from the end of the parameter string


// return masked string
function maskify(cc) {
  if(cc.length <= 4) {
    return cc
  } else {
    let masked = ''
    let slicedStrMasked = cc.slice(0,-4)
    for(let i = 0; i<slicedStrMasked.length; i ++) {
      masked += '#'
    }
    return masked + cc.slice(-4)
  }
}

console.log(maskify('12391523905')) // #######3905
console.log(maskify('1')) // 1