const reverseString = function(stringToReverse) {
    let reversedString = "";
    const stringSplitToChars = stringToReverse.split('');
    const stringArrayLength = stringSplitToChars.length
    for(i=0;i<stringArrayLength;i++) {
        reversedString += stringSplitToChars.pop();
    }
    return reversedString;
};

console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
