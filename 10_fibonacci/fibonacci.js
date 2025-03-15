const fibonacci = function(fibNum) {
// initialize array to hold fibonacci sequence, start with 0 to prime for first run
const numTimesToRun = parseInt(fibNum);
if (numTimesToRun === 0) return 0;
if (numTimesToRun < 0) return "OOPS";
const fib = [0,1]
    for(let i=1;i<numTimesToRun;i++){
        fib.push(fib[i]+fib[i-1]);
        console.table(fib);
    }
    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
