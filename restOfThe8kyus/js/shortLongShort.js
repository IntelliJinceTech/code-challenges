// 2 strings as parameters
//  parameter can be numbers
//  strings will not be the same length
//  can be of zero length
// return 1 string (format is short+long+short)

function solution(first,second) {
  //Todo  initialize 2 variables to represent longer and shorter string
  //Todo  return concatenation with above format
  return first.length > second.length ? second+first+second : first+second+first
}

console.log(solution('1','22')) // '1221'
console.log(solution('45', '1'))//, '1451');
console.log(solution('13', '200'))//, '1320013');
console.log(solution('Soon', 'Me'))//, 'MeSoonMe');
console.log(solution('U', 'False'))//, 'UFalseU');