
let score = document.querySelector('.score'); //czemu tutaj lety? 
let operation = document.querySelector('.operation');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');
const btnAction = document.querySelectorAll('.btnAction');
const btnNumber = document.querySelectorAll('.btnNumber');
const btnEqual = document.querySelector('.btnEqual');

btnClear.addEventListener('click', () => {
    score.innerHTML = '';
    operation.innerHTML = '';
    setHeaderText('adsadas')
});


setHeaderText('dasdasdads')