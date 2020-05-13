'use strict';

const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

const promptlabel = `Укажите вашу страну`;

let userChoice = prompt(promptlabel).toLowerCase();
let message;

if (userChoice === null) {
  message = 'Очень жаль, приходите ещё';
} else {
  switch (userChoice) {
    case 'сhina':
      message = `Доставка в Китай будет стоить ${сhina} кредитов`;
      break;

    case 'сhile':
      message = `Доставка в Чили будет стоить ${сhile} кредитов`;
      break;

    case 'australia':
      message = `Доставка в Австралию будет стоить ${australia} кредитов`;
      break;

    case 'india':
      message = `Доставка в Индию будет стоить ${india} кредитов`;
      break;

    case 'jamaica':
      message = `Доставка в Ямайку будет стоить ${jamaica} кредитов`;
      break;

    default:
      message = 'Ничего не выбрано';
      break;
  }
}
console.log(message);

alert('В вашей стране доставка не доступна');
