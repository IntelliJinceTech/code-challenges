//  url string that can contain symbols, or other than alphabetical characters
  //  url string doesnt have to have #
//  returns string without # and anything after

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  //todo  if string does not include # --> return url parameter
  //todo  if string does include # --> 
  //todo    grab index of #
  //todo    slice or splice 
  //todo    return string without the #

  // if(url.indexOf('#') == -1) {
  //   return url
  // } else {
  //   let ind = url.indexOf('#')
  //   return url.slice(0,ind)
  // }

  let urlInd = url.indexOf('#')
  return urlInd != -1 ? url.slice(0,urlInd) : url
}

console.log(removeUrlAnchor('www.codewars.com#about')) // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com')) // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas?page=1#about')) // www.codewars.com/katas?page=1

