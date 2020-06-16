'use strict';

let input = prompt('Введите число');
let total = 0;

while (input) {
  total += Number(input);
  input = prompt('Введите число');
}

alert(`Общая сумма чисел равна ${total}`);
