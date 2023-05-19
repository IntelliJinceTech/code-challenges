// input --> array of strings, single letter per index, can be empty array
// returns --> an array of strings - specific format
//  format --> ["1: string", "2: string", "3: string"]
// examples:
//      [] --> []
//      ["a","b","c"] --> ["1: a", "2: b", "3: c"]

let stringArrayTesting = array => {
	// todo iterate over array (map)
	// todo     for each element, use format with template literals
	return array.map((str, ind) => {
		return `${ind + 1}: ${str}`
	})
}

console.log(stringArrayTesting(['a', 'b', 'c']), ['1: a', '2: b', '3: c'])
console.log(stringArrayTesting([]), [])
