/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (0 === str.length) return '';
  return str.split('-')
    .map( (word, index) =>
                              { if (0 === index) return word;
                                let prefix = word.substr(0,1);
                                let suffix = '';
                                if (word.length > 1) {
                                  suffix = word.substr(1, word.length -1);
                                }
                                return prefix.toLocaleUpperCase() + suffix;
                              }
     ).join("");

}
