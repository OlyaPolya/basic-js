const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ArrayStr = [];

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    ArrayStr.push(count);
    ArrayStr.push(str[i]);
    count = 1;
  }

  let result = ArrayStr.join().replace(/[\s1,]/g, "");

  return result;
}

module.exports = {
  encodeLine,
};
