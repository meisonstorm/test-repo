// MENU
const btnProjects = document.querySelectorAll('.projects');

const btnClose = document.querySelector('.close');
const btnCalc = document.querySelector('.projCalc');

const text = document.querySelector('h2')
const areaCalc = document.querySelector('.secCalculator');

btnProjects.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('close');
        btnClose.classList.remove('close');
        areaCalc.classList.remove('close');
    });
});


// Project 1 - Calculator

btnCalc.addEventListener('click', () => {
    text.innerHTML = 'Projekt 1: Prosty kalkulator'
});

btnClose.addEventListener('click', () => {
    btnCalc.classList.remove('close');
    btnClose.classList.add('close');
    areaCalc.classList.add('close');
    text.innerHTML = ''
});

let score = document.querySelector('.score');
let operation = document.querySelector('.operation');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');
const btnAction = document.querySelectorAll('.btnAction');
const btnNumber = document.querySelectorAll('.btnNumber');
const btnEqual = document.querySelector('.btnEqual');

btnClear.addEventListener('click', () => {
    score.innerHTML = '';
    operation.innerHTML = '';
});

