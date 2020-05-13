'use strict';

let price = 1000;
console.log(price);

const name = 'Генератор защитного поля';
console.log(name);

const message = `Выбран ${name}, цена за штуку ${price} кредитов.`;

console.log(message);

price = 2000;
const sameMessage = `Выбран ${name}, цена за штуку ${price} кредитов.`;

console.log(sameMessage);
