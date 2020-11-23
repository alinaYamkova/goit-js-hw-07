//Создай функции increment и 
//decrement для увеличения и уменьшения значения счетчика
let counterValue = 0;

function firstClick(){
  counterValue +=1;
  targetBtnRef.textContent = counterValue;
  console.log('+ click');
}

function secondClick(){
  counterValue -=1;
  targetBtnRef.textContent = counterValue;
  console.log('- click');
}

const targetBtnRef = document.getElementById('value');

document.querySelector("[data-action='increment']").addEventListener('click', firstClick);
document.querySelector("[data-action='decrement']").addEventListener('click', secondClick);
// console.log(targetBtnRef);