const palindromes = function (stringToTest) {
    const az09Regex = /[a-z0-9]/
    //split the string after putting it in lower case
    const splitString = stringToTest.toLowerCase().split("").filter((char) => az09Regex.test(char))
    //filter off punctuation and spaces
    const splitWithoutPunctuation = splitString.filter((char) => azRegex.test(char))

    // deep copy the array.  What follows exists because I didn't know .reverse() was a thing
    const arrayToReverse = [...splitWithoutPunctuation];
    const reversedArray = new Array();
    // get the length before you tear the array up
    const reversedArrayLength = arrayToReverse.length;
    for (let i=0; i<reversedArrayLength;i++) {
        //remove the last item of the array and put it on the end of a new array
        reversedArray[i] = arrayToReverse.pop()
    }
    if (splitWithoutPunctuation.join("") === reversedArray.join("")) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
