/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const hash = {};
  for (let i = 0; i < domains.length; i++) {
    const dns = domains[i];
    const dnsList = dns.split('.').reverse();
    const prev = [];
    for (let j = 0; j < dnsList.length; j++) {
      prev.push(dnsList[j]);
      const currentDomain = `.${prev.join('.')}`;
      if (typeof hash[currentDomain] !== 'undefined') {
        hash[currentDomain] += 1;
      } else {
        hash[currentDomain] = 1;
      }
    }
  }
  return hash;
}

module.exports = getDNSStats;
