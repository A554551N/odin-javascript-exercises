const findTheOldest = function(arrayOfPeople) {
    arrayOfPeople.sort((a,b) => {
        console.log(`A Date of Death: ${a.yearOfDeath}`)
        console.log(`B Date of Death: ${b.yearOfDeath??2022}`)
        ageOfA = ((a.yearOfDeath ?? 2025) - a.yearOfBirth);
        ageOfB = ((b.yearOfDeath ?? 2025) - b.yearOfBirth);
        return ageOfA > ageOfB ? 1 : -1;
    })
    return arrayOfPeople.pop();
};

findTheOldest([{yearofBirth:1500},{yearOfDeath:1800,yearofBirth:1400}])
// Do not edit below this line
module.exports = findTheOldest;
