// Function to take in a string
// Returns a string
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// ? Given a function with parameters as strings
// ? convert string to array
// ? loop over array and change all As to Ts and Cs to Gs
// ? Join the array with no spaces
// ? Return the array

// function DNAStrand(dna) {
//     return dna
//         .split("")
//         .map((ele) => {
//             if (ele === "A") {
//                 return "T";
//             } else if (ele === "T") {
//                 return "A";
//             } else if (ele === "G") {
//                 return "C";
//             } else {
//                 return "G";
//             }
//         })
//         .join("");
// }

let pairsDNA = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
};

function DNAStrand(dna) {
    return dna
        .split("")
        .map((ele) => {
            return pairsDNA[ele];
        })
        .join("");
}

console.log(DNAStrand("ATTGC"));
