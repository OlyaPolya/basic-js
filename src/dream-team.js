const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }

  let result = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != "string") {
      continue;
    }
    result.push(members[i].split(" ").join("").toUpperCase());
  }

  result = result.sort();

  let resultAbbr = [];
  for (let i = 0; i < result.length; i++) {
    resultAbbr.push(result[i][0]);
  }

  let x = resultAbbr.toString().replace(/,/g, "");
  console.log(x);
  return x;
}

module.exports = {
  createDreamTeam,
};
