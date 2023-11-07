// array of arrays
// each nested array is a pair of integers
// first integer of pair is people getting on the bus
// second integer of pair is num people getting OFF the bus

// const number = busStops => {
// 	// initiate variable people
// 	// iterate over bus stops
// 	//      for each iteration:
// 	//          add the difference of the pairs to the people variable

// 	let people = 0
// 	busStops.forEach(stop => {
// 		people += stop[0] - stop[1]
// 	})
// 	return people
// }

const number = busStops =>
	busStops.reduce((prev, [on, off]) => {
		return prev + on - off
	}, 0)

console.log(
	number([
		[10, 0],
		[3, 5],
		[5, 8],
	]),
	5
)

console.log(number([[0, 0]]), 0)
