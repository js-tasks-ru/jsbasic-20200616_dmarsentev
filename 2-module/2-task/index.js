/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let sum = 0;
  for (const key in obj ) {
    sum++;
  }
  return 0 === sum;
}
