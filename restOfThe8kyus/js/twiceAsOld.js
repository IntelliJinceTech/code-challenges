function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld / 2 >= sonYearsOld ? (dadYearsOld / 2) - sonYearsOld : sonYearsOld - (dadYearsOld / 2)
}

console.log(twiceAsOld(36, 7))