'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const newLogins = [];

//==============================================

const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else return false;
  console.log('Ошибка! Логин должен быть от 4 до 16 символов');
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    return false;
    console.log('Такой логин уже используется!');
  } else return true;
  console.log('Логин успешно добавлен!');
};

//====================================================

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  } else {
    newLogins.push(login);
    return 'Логин успешно добавлен!';
  }
};
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
