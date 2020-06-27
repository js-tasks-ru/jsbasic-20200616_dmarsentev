/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const matcher1 = str.match(/1xBet/ig);
  const matcher2 = str.match(/XXX/ig);
  return matcher1 !== null || matcher2 !== null;
}
