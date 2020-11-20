const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const createCard = ingredients => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredients
  return listItem;
}

const liList = ingredients.map(ingredient => createCard(ingredient));
// console.log(liList);

const ul = document.getElementById('ingredients');
// console.log(ul);

ul.append(...liList);
console.log(ul);