//parameter - array of items. strings can be of different lengths, can have numbers
//returns array of strings - same array?
//examples:
//?
//pseudocode
// todo filter out elements of array that are both string length of 4 and
// todo
// todo
// todo

function friend(friends) {
    return friends.filter((friend) => {
        return friend.length == 4;
    });
}

console.log(friend(["Ryan", "Mark", "Kiernan"])); //["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
