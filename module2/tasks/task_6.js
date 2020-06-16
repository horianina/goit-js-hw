'use strict';
let input;
const numbers = [];
let total = 0;
while (true) {
  let number = prompt('Please, enter a number:', '');
  input = Number(number);
  numbers.push(input);
  if (number === null);
  break;
}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log('Общая сума чисел равна:' + total);
