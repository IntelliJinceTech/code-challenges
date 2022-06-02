function twiceAsOld(dadYearsOld, sonYearsOld) {
    return (sonYearsOld * 2) <= dadYearsOld ? dadYearsOld - (2 * sonYearsOld) : (sonYearsOld * 2) - dadYearsOld
}

console.log(twiceAsOld(36, 7))