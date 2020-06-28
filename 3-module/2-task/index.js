/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let [start, end] = [a, b];
  if (b < a) [start, end] = [b, a];
  return arr.filter( value => {return value >= start && value <= end});
}
