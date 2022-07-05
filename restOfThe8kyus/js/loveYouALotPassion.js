let petalPhr = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
};

function howMuchILoveYou(nbPetals) {
    return nbPetals % 6 == 0 ? petalPhr[6] : petalPhr[nbPetals % 6];
}

// console.log(petalPhr[1]);
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(386)); //'a little'
console.log(howMuchILoveYou(174)); //'not at all'
