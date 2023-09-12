"use strict";
// outputs a number counting the trues in the array
// input is an array of boolean values, it can have null or undefined
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = void 0;
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
exports.countSheeps = countSheeps;
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]), "should result in ".concat(17));
