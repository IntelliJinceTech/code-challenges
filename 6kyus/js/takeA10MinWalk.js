// parameter
//      array of 1 letter strings
//      never receive an empty array
//      direction letters in the array only
// return
//      Boolean true or false
//      true condition:
//          10 minutes - in total --> length of array should be 10
//          1 minute per block
//          needs to return to starting position --> equal opposite directions to return to original position?
//      false condition:
//?         Basically everything not above

function isValidWalk(walk) {
	//
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) //, 'should return true');
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']) //, 'should return false');
isValidWalk(['w']) //, 'should return false');
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) //, 'should return false');
