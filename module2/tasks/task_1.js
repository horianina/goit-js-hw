'use strict';

const logItems = function (array) {
  let i = 0;
  for (let i = 0; i < array.lenght; i += 1);

  //console.log(i + 1, ' - ', array[i]);
  console.log(`${i + 1} - ${array[i]}`);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
