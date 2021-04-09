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
  const result = [...names];
  const hash = {};
  for (let i = 0; i <= result.length; i++) {
    if (typeof hash[result[i]] !== 'undefined') {
      if (hash[result[i]] >= 1) {
        const prev = result[i];
        const newName = `${result[i]}(${hash[result[i]]})`;
        hash[newName] = 1;
        result[i] = newName;
        hash[prev] += 1;
      }
    } else {
      hash[result[i]] = 1;
    }
  }

  return result;
}

module.exports = renameFiles;
