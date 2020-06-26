/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    console.log("key = " + key + ", value = " + salaries[key] );
    if ('number' === typeof(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}
