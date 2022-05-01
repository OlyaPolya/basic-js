const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ObjectS1 = {};
  let ObjectS2 = {};
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    ObjectS1[letter] = (ObjectS1[letter] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    ObjectS2[letter] = (ObjectS2[letter] || 0) + 1;
  }

  for (let letterS1 in ObjectS1) {
    for (let letterS2 in ObjectS2) {
      if (letterS1 === letterS2) {
        if (ObjectS1[letterS1] < ObjectS2[letterS2]) {
          count = count + ObjectS1[letterS1];
        } else {
          count = count + ObjectS2[letterS2];
        }
      }
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
