//  4 inputs, all strings with a combination of numbers or characters
//  1st input = entered Code
//  2nd input = correct code
//  3rd input = currentDate
//  4th input = expirationDate
// ! Returns Boolean
//  TODO  coupon is valid only if the code entered === correct code && current date is on or before the expiration date
//  TODO    comparison between 1, 2 inputs. 
//  TODO    use Date function?
//  TODO  if code entered != correct code or current date is after expiration date --> invalid
//  TODO

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  currentDate = new Date(currentDate).getTime();
  expirationDate = new Date(expirationDate).getTime()
  return (enteredCode === correctCode) && (currentDate <=expirationDate)
}


console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))  //===  true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) // ===  false