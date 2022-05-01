const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (date instanceof Date === false) {
    throw new Error("Invalid date!");
  }

  if (Object.prototype.toString.call(date) != "[object Date]" || date[Symbol.toStringTag] === "Date") {
    throw new Error("Invalid date!");
  }

  let date1 = date.getMonth();

  if (date1 < 2 || date1 === 11) {
    return "winter";
  }
  if (date1 < 5 && date1 > 1) {
    return "spring";
  }
  if (date1 < 8 && date1 > 4) {
    return "summer";
  }

  if (date1 < 11 && date1 > 7) {
    return "autumn";
  }
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};
