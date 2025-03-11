const leapYears = function(year) {
    //if divisible by four AND not divisible by 100 AND divisible by 400
    const remainderOfYearDividedBy4 = year % 4;
    const remainderOfYearDividedBy100 = year % 100;
    const remainderOfYearDividedBy400 = year % 400;

    if (remainderOfYearDividedBy4 == 0) {
        if (remainderOfYearDividedBy100 != 0 || remainderOfYearDividedBy400 == 0) return true
    }

    return false
};

// Do not edit below this line
module.exports = leapYears;
