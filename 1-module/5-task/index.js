/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  const suffix = "…";
  if (maxlength <= 0) return str;
  if (maxlength >= str.length) return str;
  let newstr = str.substr(0, maxlength - 1);
  return newstr + suffix;
}
