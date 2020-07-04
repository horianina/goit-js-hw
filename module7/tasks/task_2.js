//В HTML есть пустой список ul#ingredients.

//<ul id="ingredients"></ul>
//В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*Напиши скрипт, который для каждого элемента массива ingredients создаст
 отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().*/
const ul = document.querySelector('ul');

console.log(ul);
const fragment = document.createDocumentFragment();

for (const item of ingredients) {
  const li = document.createElement('li');
  li.textContent = item;
  fragment.appendChild(li);
}
ul.append(fragment);
console.log(fragment);
