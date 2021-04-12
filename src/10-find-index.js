/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let midIndex = Math.round(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (value !== array[midIndex]) {
      if (value < array[midIndex]) {
        end = midIndex;
        midIndex = Math.round((start + end) / 2);
      }
      if (value > array[midIndex]) {
        start = midIndex;
        midIndex = Math.round((start + end) / 2);
      }
    } else {
      return midIndex;
    }
  }
  return 0;
}

module.exports = findIndex;
