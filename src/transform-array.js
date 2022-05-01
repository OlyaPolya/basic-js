const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Object.prototype.toString.call(arr) != "[object Array]") {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i = i + 2;
        break;
      case "--discard-prev":
        newArray.pop();
        break;
      case "--double-next":
        newArray.push(arr[i + 1]);
        break;
      case "--double-prev":
        newArray.push(arr[i - 1]);
        break;
      case "[undefined]":
        break;
      default:
        newArray.push(arr[i]);
    }
  }

  let ar = [];

  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] != "undefined") {
      ar.push(newArray[i]);
    }
  }

  return ar;
}

module.exports = {
  transform,
};
