let calculator = {
  first: 0,
  second: 0,
  read: function (a, b) {
    this.first = a;
    this.second = b;
  },
  sum: function () {
    return this.first + this.second;
  },
  mul: function () {
    return this.first * this.second;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
