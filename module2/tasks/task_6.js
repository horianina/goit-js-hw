'use strict';
/*let input;
const numbers = [];
let total = 0;
while (input !== null && input !== '') {
  let number = prompt('Введите число');
  input = Number(number);
  numbers.push(input);
  if (number === null) {
    break;
  }
  if (input !== Number(input)) {
    alert('Вы ввели не число');
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);*/
//===========================================================================
/*let input;

let total = 0;
const numbers = [];
while (input !== null && input !== '') {
  input = prompt('Введите число');
  numbers.push(Number(input));
  total += Number(input);
}
/*if (input === String) {
  alert(`Вы ввели не число`);
}*/

//console.log(`Общая сумма чисел равна ${total}`);*/

//============================================================
let input;
const numbers = [];
let total = 0;

while (input !== null && input !== '') {
  let number = prompt('Введите число: ');
  input = Number(number);
  if (number === null) {
    break;
  }
  if (isNaN(input)) {
    alert('Вы ввели не число');
  } else {
    numbers.push(input);
  }
}
for (let number of numbers) {
  total += number;
}

console.log(`Общая сума чисел равна ${total}`);
//======================================================
/*let input;
const numbers = [];
let total = 0;
while (input !== null) {
  let number = prompt('Введите число');
  input = Number(number);
  if (input === null) {
    break;
  }
  if (isNaN(input) === true) {
    alert('Вы ввели не число');
  }

  if (input === '') {
    alert('Вы ничего не ввели');
  }
  if (isNaN(input) === false) {
    numbers.push(input);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);*/
