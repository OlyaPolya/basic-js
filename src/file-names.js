const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let new_names = [];

  for (let i = 0; i < names.length; i++) {
    let repeats = 0;
    let postfix = "";
    for (let j = 0; j < new_names.length; j++) {
      if (new_names[j].substring(0, names[i].length) == names[i]) {
        if (new_names[j].length == names[i].length) {
          repeats++;
        } else if (new_names[j].length == names[i].length + 3 && new_names[j][names[i].length] == "(" && new_names[j][names[i].length + 2] == ")") {
          repeats++;
        }
      }
      //console.log(i + " - " + names[i] + " - " + new_names[j].substring(0, names[i].length) + " repeats = " + repeats);
    }
    if (repeats > 0) {
      postfix = "(" + repeats + ")";
      //console.log(postfix);
    }
    new_names.push(names[i] + postfix);
  }

  return new_names;
}

module.exports = {
  renameFiles,
};
