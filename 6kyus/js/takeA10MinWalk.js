// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
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

// TODO true if
// TODO     length of array = 10
// TODO     number of opposing directions should equal each other (5n, 5s OR 5w, 5e)
// TODO         use of object to count each occurrence
// TODO         create key value pairing object for directions?
// TODO otherwise false

// const directions = {
// 	n: 's',
// 	s: 'n',
// 	w: 'e',
// 	e: 'w',
// }

// function isValidWalk(walk) {
// 	// review needed
// }

// function isValidWalk(walk) {
// 	const trackWalk = {}
// 	let booleanWalk = false
// 	walk.forEach(block => {
// 		return trackWalk.hasOwnProperty(block) ? (trackWalk[block] += 1) : (trackWalk[block] = 1)
// 	})
// 	//compare whether trackWalk object has equal opposing directions
// 	for (let dir in trackWalk) {
// 		if (trackWalk[directions[dir]] === trackWalk[dir]) {
// 			booleanWalk = true
// 		}
// 	}
// 	return booleanWalk && walk.length === 10
// }

// Correct
// function isValidWalk1(walk) {
// 	var dx = 0
// 	var dy = 0
// 	var dt = walk.length

// 	for (var i = 0; i < walk.length; i++) {
// 		switch (walk[i]) {
// 			case 'n':
// 				dy--
// 				break
// 			case 's':
// 				dy++
// 				break
// 			case 'w':
// 				dx--
// 				break
// 			case 'e':
// 				dx++
// 				break
// 		}
// 	}

// 	return dt === 10 && dx === 0 && dy === 0
// }

// function isValidWalk2(walk) {
// 	function count(val) {
// 		return walk.filter(function (a) {
// 			return a == val
// 		}).length
// 	}
// 	return walk.length == 10 && count('n') == count('s') && count('w') == count('e')
// }

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) //, 'should return true');
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])) //, 'should return false');
// console.log(isValidWalk(['w'])) //, 'should return false');
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) //, 'should return false');

function isValidWalk(walk) {
	let directionNS = 0
	let directionEW = 0
	let count = 0
	walk.forEach(direction => {
		switch (direction) {
			case 'n':
				count++
				directionNS++
				break
			case 's':
				count++
				directionNS--
				break
			case 'e':
				count++
				directionEW++
				break
			case 'w':
				count++
				directionEW--
				break
		}
	})
	return count === 10 && directionNS === 0 && directionEW === 0
}
