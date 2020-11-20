// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет 
// инлайн-стиль span#text обновляя свойство font-size. В результате
// при перетаскивании ползунка будет меняться размер текста.

const SizeControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.dir(SizeControlRef);
console.dir(text);

SizeControlRef.addEventListener('input', (e) => {
  changeTextSize(e)
});

function changeTextSize(e) {
  if (SizeControlRef) {
    text.style.fontSize = event.currentTarget.value + "px";
    console.log(text);
  }
}