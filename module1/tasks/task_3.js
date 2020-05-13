'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';

const promptlabel = `Пожалуйста введите пароль:`;
const userChoice = prompt(promptlabel);
let message;

if (userChoice === null) {
  message = 'Отменено пользователем!';
} else if (userChoice === ADMIN_PASSWORD) {
  message = 'Добро пожаловать';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
