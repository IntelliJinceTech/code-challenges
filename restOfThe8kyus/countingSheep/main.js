// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

let arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
function countSheeps(arrayOfSheep) {
    let trueSheep = 0
    for(const sheep of arrayOfSheep) {
        sheep ? trueSheep+=1 : trueSheep
    }
    return trueSheep;
}

function countSheepsBool(arrayOfSheeps){
    let arrSheep = arrayOfSheeps.filter((item => Boolean(item)));
    console.log(arrSheep);

}

function countSheepBoolCorrect(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}