/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов 
в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить,
 коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает 
столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

const amountInput = document.querySelector('input[type=number]');
const block = document.createElement('div');
//let markup = '';
function createBoxes(amount) {
  amount = Number(amountInput.value);
  let markup = '';
  let x = 30;

  for (let i = 1; i <= amount; i += 1) {
    x += 10;

    markup += `<div class="square" style="width: ${x}px; height: ${x}px; border: 1px solid black; background-color: rgba( ${random()} , ${random()} , ${random()} )"></div>`;
  }
  console.log(markup);
  boxes.innerHTML = markup;
  console.log(boxes);
  //block.innerHTML = markup;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}

buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
//amountInput.addEventListener('input', createBoxes());
