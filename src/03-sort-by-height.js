/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const negIndexes = [];
  let copy = [...arr];
  copy.forEach((el, i) => {
    if (el === -1) {
      negIndexes.push(i);
    }
  });

  copy = copy.sort((a, b) => a - b);
  copy.splice(0, negIndexes.length);

  negIndexes.forEach((el) => {
    copy.splice(el, 0, -1);
  });

  return copy;
}

module.exports = sortByHeight;
