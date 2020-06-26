/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (0 === str.length) return '';
  let p = str.match(/^(.{1})(.*)$/);
  return p[1].toLocaleUpperCase() + p[2];
}
