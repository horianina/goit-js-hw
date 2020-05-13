'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

const promptlabel = `Какое количество дроидов хотите купить?`;
let userChoice = prompt(promptlabel);
let message;

if (userChoice === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = pricePerDroid * userChoice;
  console.log(totalPrice);
}

if (!message) {
  if (credits - totalPrice <= 0) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${userChoice} дроида(ов), на счету осталось ${credits}`,
    );
  }
} else {
  console.log(message);
}
