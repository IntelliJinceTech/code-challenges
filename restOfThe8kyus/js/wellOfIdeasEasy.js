function well(x) {
    // create object of good and bad with values of 0
    // loop over array and ++ when checking each element
    // If no good ideas = fail
    // if more than 2 = > I smell a series
    // else publish!

    const goodBad = {
        good: 0,
        bad: 0,
    };

    x.forEach((ele) => {
        return ele == "good" ? (goodBad.good += 1) : (goodBad.bad += 1);
    });
    if (goodBad.good > 2) {
        return "I smell a series!";
    } else if (goodBad.good == 0) {
        return "Fail!";
    } else {
        return "Publish!";
    }
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));
