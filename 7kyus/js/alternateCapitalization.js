//  parameter is a string - input will be lower case and with no spaces
//  returns 2 strings as output
//    first string = evens + 0 will be capitalized
//    second string = odds will be capitalized

//TODO  initialize 2 empty strings into 2 variables
//TODO  loop over string
//TODO  when index = 0 --> add capitalized letter to first string and add lowercase letter to second string
//TODO    OR index % 2 ===0 add capitalized letter to first string and add lowercase letter to second string
//TODO    
//TODO  when index % 2 ===1 --> add capitalized letter to second string and lowercase letter to first string
//TODO  return array of first string and second string in separate indexes

function capitalize(s){
  let evenStr = ""
  let oddStr = ""
  for(let i = 0 ; i< s.length ; i++) {
    if(i === 0 || i % 2 ===0) {
      evenStr+= s[i].toUpperCase()
      oddStr += s[i]
    } else {
      evenStr += s[i]
      oddStr += s[i].toUpperCase()
    }
  }
  return [evenStr,oddStr]
};

// examples

console.log(capitalize("abcdef"))//,['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"))//,['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"))//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"))//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);


// codewars voted
function capitalizeCW(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};