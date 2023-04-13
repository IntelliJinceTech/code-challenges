//input parameter of the function --> string
//return reversed string
//examples

function reverse(string) {
    //todo split into an array based on spacess
    //todo reverse
    return string.split(" ").reverse().join(" ");
}

console.log(reverse("I am an expert at this"));
console.log(reverse("This is so easy"));
console.log(reverse("no one cares"));
console.log(reverse(""));
console.log(reverse("Codewars"));
