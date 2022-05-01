const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfСonstituentNumbers = [];

  while (n > 0) {
    let constituentNumber = n % 10;
    arrayOfСonstituentNumbers.push(constituentNumber);
    n = Math.floor(n / 10);
  }

  const arrayOfPartNumbers = [];

  for (let i = 0; i < arrayOfСonstituentNumbers.length; i++) {
    let tempNumber = 0;
    for (let j = arrayOfСonstituentNumbers.length - 1; j >= 0; j--) {
      if (i != j) {
        tempNumber = tempNumber * 10 + arrayOfСonstituentNumbers[j];
      }
    }
    arrayOfPartNumbers.push(tempNumber);
  }

  arrayOfPartNumbers.sort((a, b) => b - a);

  return arrayOfPartNumbers[0];
}

module.exports = {
  deleteDigit,
};
