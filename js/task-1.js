
// 1
const listRef = document.getElementById("categories");
// const listRef = document.querySelectorAll("ul");
console.log(listRef);

//2
const categories = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
console.log(`В списке ${categories.length} категории`);

//3
const ul = Array.from(document.querySelector('#categories').children);
for (const elem of ul) {
  let category = elem.firstElementChild.textContent;   
  let sumOfElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} 
  Количество элементов: ${sumOfElem}`);
};