const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sumOfNum,num) => sumOfNum + num,0)
};

const multiply = function(arr) {
  return arr.reduce((total,currNum) => total * currNum)
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(factor) {
  if (factor === 0) return 1;
	let total = factor;
  let runningFactor = factor - 1;
  for(runningFactor;runningFactor>1;runningFactor--)
    total = total * runningFactor;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
