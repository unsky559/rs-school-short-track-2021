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
  const number = n.toString();
  const variations = [];
  for (let i = 0; i < number.length; i++) {
    const temp = [...number];
    temp.splice(i, 1);
    variations.push(parseInt(temp.join(''), 10));
  }
  return Math.max(...variations);
}

module.exports = deleteDigit;
