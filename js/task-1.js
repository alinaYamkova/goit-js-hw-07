
// 1
const listRef = document.getElementById("categories");
console.log(listRef);

//2
const categories = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
console.log(`В списке ${categories.length} категории`);

//3
const ul = Array.from(document.querySelector('#categories').children);

const categoriesList = [];
ul.forEach(element => {
  categoriesList.push(`Категория: ${element.querySelector("h2").textContent} 
  Количество элементов: ${element.querySelectorAll('li').length}`
  );
});
console.log(categoriesList);