/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
отображаться строка 'незнакомец'.*/
const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');

const checkInput = function (event) {
  if (event.target.value.length === 0) {
    formOutput.innerHTML = 'Незнакомец';
  } else {
    formOutput.innerHTML = event.target.value;
  }
};
formInput.addEventListener('input', checkInput);
