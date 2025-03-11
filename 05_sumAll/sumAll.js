const sumAll = function(firstNumber,secondNumber) {
    if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR'
    } else if (!Number.isInteger(firstNumber)||!Number.isInteger(secondNumber)) {
        return 'ERROR'
    }
    
    const smallerNumber = Math.min(firstNumber,secondNumber);
    const largerNumber = Math.max(firstNumber,secondNumber);
    let sum = 0;
    for (i=smallerNumber;i<=largerNumber;i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
