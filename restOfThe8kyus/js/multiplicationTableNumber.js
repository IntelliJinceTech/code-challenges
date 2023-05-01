//  parameter is a number between 1 and 10 inclusive - no decimals
//  returns a multiplication table separated by line breaks 

// examples: for input = 5
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

function multiTable(number) {
  let str = ""
  for(let i = 1; i <=10; i ++ ) {
    if(i === 10) {
      str += `${i} * ${number} = ${number*i}`
    } else {
      str += `${i} * ${number} = ${number*i}\n`
    }
  }
  return str
}

console.log(multiTable(5))

// solution from codewars
const multiTableCW = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}