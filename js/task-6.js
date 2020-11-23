//скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
//на правильное количество символов.// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.

const inputRef = document.querySelector('#validation-input');
const data_length = inputRef.getAttribute('data-length');
// console.dir(inputRef);
// console.dir(data_length);

inputRef.addEventListener('input', event => {
  inputRef.textContent = event.target.value;
});

inputRef.addEventListener('blur', (evt) => {
  checkTheNumber(evt)
  console.log(inputRef)
});

function checkTheNumber (evt) {
  if (inputRef.textContent.length === Number(data_length)) {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid'); 
  } else {
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  };
}; 