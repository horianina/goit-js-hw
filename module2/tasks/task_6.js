'use strict';
/*let input;
const numbers = [];
let total = 0;
while (input !== null && input !== '') {
  let number = prompt('Please, enter a number:', '');
  input = Number(number);
  numbers.push(input);
  if (number === null) {
    break;
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log('Общая сума чисел равна:' + total);*/
//===========================================================================
let input;

let total = 0;
const numbers = [];
while (input !== null && input !== '') {
  input = prompt('Введите число');
  numbers.push(Number(input));
  total += Number(input);
}
console.log(`Общая сумма чисел равна ${total}`);

//============================================================
/*let input;
const numbers = [];
let total = 0;

while (input !== null && input !== '') {
  let number = prompt('Please, enter a number:', '');
  input = Number(number);
  numbers.push(input);
  if (number === null) {
    break;
  }
}
for (let number of numbers) {
  total += number;
}

console.log(`Общая сума чисел равна ${total}`);*/
