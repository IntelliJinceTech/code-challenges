//  string parameters 
  //  can there be symbols or not alphabetical characters?
//  returns boolean
//  examples below

//todo  normalize both strings case-wise
//todo  split to array
//todo  sort both strings alphabetically
//todo  conditional between strings
//todo  


const isAnagram = (test,original) => {
  let testStr = test.toLowerCase().split('').sort().join('');
  let originalStr = original.toLowerCase().split('').sort().join('');
  return testStr == originalStr

}
const isAnagramOptimized = (test,original) => {
  test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');

}

console.log(isAnagramOptimized("foefet","toffee")) // true
console.log(isAnagramOptimized("Buckethead","DeathCubeK")) //true