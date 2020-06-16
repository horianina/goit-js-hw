'use strict';

let china = 100;
let chile = 250;
let australia = 170;
const india = 80;
const jamaica = 120;

let inputCountry = prompt(`Укажите вашу страну`);

if (inputCountry !== null) {
  switch (inputCountry.toLowerCase()) {
    case 'china':
      alert(`Доставка в Китай будет стоить ${china} кредитов`);
      break;

    case 'chile':
      alert(`Доставка в Чили будет стоить ${chile} кредитов`);
      break;

    case 'australia':
      alert(`Доставка в Австралию будет стоить ${australia} кредитов`);
      break;

    case 'india':
      alert(`Доставка в Индию будет стоить ${india} кредитов`);
      break;

    case 'jamaica':
      alert(`Доставка в Ямайку будет стоить ${jamaica} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
      break;
  }
} else console.log('Отменено пользователем');
