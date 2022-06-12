// P - Parameters
// R - Return 
// E - Examples
// P - Pseudocode


//! Parameters
//? A string between 1 and 1000 characters of any kind

//! Return 
//? Returns a string 
//? middle character if word length is odd 
//? middle 2 characters if word length is even
//? no need for handling capitalization 

//! Examples
//? test --> es (test[1]+test[2]) word length = 4
//? testing --> t (testing[3]) word length = 7
//? middle --> dd
//? A --> A

//! Pseudocode
//? Given a string
//? if length of the word is odd --> return char at midpoint (Math.floor?)
//? else if even --> return chars at midpoint (math.floor and math.ceil)
//? 