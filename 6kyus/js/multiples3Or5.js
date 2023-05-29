// number - both negative or positive
//  if input is below 0 then return 0
// outputs a number
//  sum
//
//
//
//

//todo if num <=0 return 0
//todo  LOOP from 1 to num
//Todo      initialize sum variable with initial value of 0
//Todo      check if num is divisible by 3 and 5
//Todo      check if num is divisible by 3
//Todo      check if num is divisible by 5
//Todo      if conditions are met --> add to sum variable
//Todo
//Todo sum all multiples of 3 and 5
function solution(num) {
	let sum = 0
	for (let i = 0; i < num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			sum += i
		} else if (i % 3 === 0 || i % 5 === 0) {
			sum += i
		}
	}
	return sum
}

console.log(solution(10), 23)
