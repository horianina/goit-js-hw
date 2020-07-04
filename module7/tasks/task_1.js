const listID = document.querySelector('#categories');
console.log(listID);

const sumlistItems = listID.children.length;
console.log(`В списке ${sumlistItems} категории`);
const arrayItem = document.querySelectorAll('.item');
console.log(arrayItem);
const newArrayItem = Array.from(arrayItem);
console.log(newArrayItem);
for (let i = 0; i < newArrayItem.length; i += 1) {
  const nameCategory = newArrayItem[i].children[0].textContent;
  console.log(nameCategory);
  const quantityElem = newArrayItem[i].children[1].children.length;
  console.log(quantityElem);
}

/*let categories = document.querySelector('#categories');
let liItem = categories.firstElementChild.innerHTML;

console.log(liItem);*/

/*let categories = document.querySelector('#categories');
let elems = categories.firstChild;

for (let elem of elems) {
  let total = 0;
  console.log(elem.innerHTML);
  total += elem.innerHTML;
  console.log(total);
}*/
/*let categories = document.querySelector('#categories');
let liItem = categories.firstChild;

console.log(liItem);*/
