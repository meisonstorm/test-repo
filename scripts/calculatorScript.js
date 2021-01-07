openCalculatorProject.addEventListener('click', () => {
    projectSectionName.innerHTML = 'Projekt 1: Prosty kalkulator'
    sectionCalculatorProject.classList.remove('close');
});

const score = document.querySelector('.score');
const operation = document.querySelector('.operation');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');
const btnAction = document.querySelectorAll('.btnAction');
const btnNumber = document.querySelectorAll('.btnNumber');
const btnEqual = document.querySelector('.btnEqual');

btnClear.addEventListener('click', () => {
    score.innerHTML = '';
    operation.innerHTML = '';
});
