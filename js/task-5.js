const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
// console.dir(inputRef);
// console.dir(spanRef);

inputRef.addEventListener('input', (event) => {
  changeF(event) 
  // console.dir(inputRef)
});

function changeF(event) {
  if (inputRef.value === "") {
    return spanRef.textContent = 'незнакомец';
  } else {
    spanRef.textContent = event.target.value;
  };
}   