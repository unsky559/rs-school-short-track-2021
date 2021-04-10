/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function countCharacter(word, symbol) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === symbol) {
      count += 1;
    }
  }
  return count;
}

function getCommonCharacterCount(s1, s2) {
  const symbols = new Set();
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    if (!symbols.has(s1[i])) {
      const firstCount = countCharacter(s1, s1[i]);
      const secondCount = countCharacter(s2, s1[i]);
      symbols.add(s1[i]);
      if (firstCount <= secondCount) {
        result += firstCount;
      } else if (secondCount <= firstCount) {
        result += secondCount;
      }
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
