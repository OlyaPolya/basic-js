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
  if (members.length === 0) {
    return false;
  }

  members = members.sort();

  const resultArray = [];

  for (let i = 0; i < members.length; i++) {
    if (members[i] != "string" || members[i].length === null) {
      continue;
    }
  }

  const res2 = [];

  for (let i = 0; i < members.length; i++) {
    res2.push(members[i][0].toUpperCase());
  }

  return res2.toString();
}

module.exports = {
  createDreamTeam,
};
