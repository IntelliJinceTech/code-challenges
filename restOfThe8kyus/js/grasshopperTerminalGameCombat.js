function combat(health, damage) {
    return health - damage >= 0 ? health - damage : 0;
}

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
