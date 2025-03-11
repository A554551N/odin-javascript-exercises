const convertToCelsius = function(degreesF) {
  // C = (F − 32) × 5/9
  const degreesC = (degreesF - 32) * (5/9);
  const degreesCRounded = Math.round(degreesC * 10)/10;
  return degreesCRounded;
};

const convertToFahrenheit = function(degreesC) {
  // F = (C × 9/5) + 32
  const degreesF = (degreesC * (9/5)) + 32;
  const degreesFRounded = Math.round(degreesF * 10)/10; 
  return degreesFRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
