const repeatString = function(string,num) {
    let outputString = "";
    
    if (num < 0) {
        return 'ERROR'
    }

    for(i=0;i<num;i++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
