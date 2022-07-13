//  given a string
//  convert to lowercase
//  get string length
//  for loop to iterate up to half of the string
//  if string beginning letters match end then it is a palindrome - else not

function isPalindrome(str) {
    let testStr = str.toLowerCase();
    let len = testStr.length;

    for (let i = 0; i < len / 2; i++) {
        if (testStr[i] !== testStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
