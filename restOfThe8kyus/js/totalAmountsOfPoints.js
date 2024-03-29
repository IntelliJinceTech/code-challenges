// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let pointTotal = 0
    games.forEach((game) => {
        // console.log(game)
        let arrays = game.split(":").map((ele) => Number(ele))
        if (arrays[0] > arrays[1]) {
            pointTotal += 3
        } else if (arrays[0] < arrays[1]) {
            pointTotal += 0
        } else {
            pointTotal += 1
        }
    })
    return pointTotal
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])