const convertToCelsius = function(f) {
  /** 
   * Fromula: C = 5/9 * (F - 32);
   * to run down decimal to 1 => .toFixed(1)
   * 
   * convert to celcius/fahrenheit with the following formula
   * run down the decimal to 1
   * return it.
   */

  const celcius = 5/9 * (f - 32);
  const fixedDecimal = celcius !== 0 ? celcius.toFixed(1) : celcius;
  
  return Number(fixedDecimal);
};

const convertToFahrenheit = function(c) {
  /**
   * Forumla = F = ()9/5 * C) + 32;
   */

  const fahrenheit = (9/5 * c) + 32;
  const fixedDecimal = fahrenheit !== 0 ? fahrenheit.toFixed(1) : fahrenheit;

  return Number(fixedDecimal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
