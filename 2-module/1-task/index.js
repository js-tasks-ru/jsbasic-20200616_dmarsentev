/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if ('number' === typeof salaries[key]) {
      sum += salaries[key];
    }
  }
  return sum;
}
