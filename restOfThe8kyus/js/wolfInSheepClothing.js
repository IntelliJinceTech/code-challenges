// parameters - array
//return - string

function warnTheSheep(queue) {
    //todo identify location of the wolf
    //todo check against length of array
    //todo      if length is greater than location of the wolf --> warn sheep of index wolf + 1
    //todo      if wolf index is last element of array --> pls go away message
    //todo

    let wolfPosition = queue.indexOf("wolf");
    if (queue.length - 1 == wolfPosition) {
        return `Pls go away and stop eating my sheep`;
    }
    if (queue.length > wolfPosition) {
        return `Oi! Sheep number ${
            queue.length - 1 - wolfPosition
        }! You are about to be eaten by a wolf!`;
    }
}

console.log(
    warnTheSheep([
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "wolf",
        "sheep",
        "sheep",
    ])
);
//     ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
//     "Oi! Sheep number 2! You are about to be eaten by a wolf!"
// );

console.log(
    warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
// ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
//     "Oi! Sheep number 5! You are about to be eaten by a wolf!";
console.log(
    warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
// ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
//     "Oi! Sheep number 6! You are about to be eaten by a wolf!";
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
// ["sheep", "wolf", "sheep"],
//     "Oi! Sheep number 1! You are about to be eaten by a wolf!";
console.log(warnTheSheep(["wolf"]));
// ["wolf"], "Pls go away and stop eating my sheep";
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
// ["sheep", "sheep", "wolf"], "Pls go away and stop eating my sheep";
