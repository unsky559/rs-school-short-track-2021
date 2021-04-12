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
  const result = str.split('');
  let res = '';
  let lastLetter = result[0];
  let counter = 0;
  for (let i = 0; i <= result.length; i++) {
    if (lastLetter === result[i]) {
      counter += 1;
    } else {
      if (counter > 1) {
        res += `${counter}${lastLetter}`;
      } else {
        res += `${lastLetter}`;
      }
      lastLetter = result[i];
      counter = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
