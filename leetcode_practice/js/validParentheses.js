// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// todo create an object that holds the opening bracket and its corresponding closing bracket
// todo create an empty array - stack
// todo iterate over string input
// todo     if char == an opening bracket, push to stack
// todo     if char === closing bracket, check if corresponding opening bracket exists
// todo         if it does exist, remove from stack
// todo if in the end length of array = 0, return true, otherwise return false

const isValid = s => {
	const stack = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			stack.push(s[i])
		} else {
			if (
				!stack.length || // stack length is empty or
				(s[i] === ')' && stack[stack.length - 1] !== '(') || // if closing bracket doesn't match with opening bracket at top of stack
				(s[i] === '}' && stack[stack.length - 1] !== '{') ||
				(s[i] === ']' && stack[stack.length - 1] !== '[')
			) {
				return false
			}
			stack.pop()
		}
	}
	return !stack.length
}

console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid('(]'), false)
