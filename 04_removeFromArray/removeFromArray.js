const removeFromArray = function(arrayToManipulate,...valuesToRemove) {
    for (const value of valuesToRemove) {
        let keepGoing = true;
        while (keepGoing) {
            const indexToRemove = arrayToManipulate.indexOf(value);
            if (indexToRemove != -1) {
                arrayToManipulate.splice(indexToRemove,1)
            } else keepGoing = false;
        }
    }
    return arrayToManipulate;
};

// Do not edit below this line
module.exports = removeFromArray;
