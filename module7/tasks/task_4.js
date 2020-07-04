/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

const counterValue = document.querySelector('#value');
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]',
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]',
);
let total = 0;
const increment = function () {
  total += 1;
  counterValue.innerHTML = total;
  return total;
};
console.log(increment());
const decrement = function () {
  total -= 1;
  counterValue.innerHTML = total;
  return total;
};
//console.log(decrement());

/*counterValue.addEventListener('click', increment);
console.log(increment());*/

buttonIncrement.addEventListener('click', increment);
//console.log(increment());

buttonDecrement.addEventListener('click', decrement);
//console.log(decrement());
