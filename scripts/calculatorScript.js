openCalculatorProject.addEventListener('click', () => {
    projectSectionName.innerHTML = 'Projekt 1: Prosty kalkulator';
    projectDescription.innerHTML = 'Miał to być prosty kalkulator posiadający jedynie funkcje dodawania, odejmowania, mnożenia i dzielenia ale na razie jestem za cienki w uszach żeby napisać to w 100% samodzielnie lub szukać poszczególnych odpowiedzi w necie... Zostawiam jak jest i dalej nie rozwijam dopóki nie będę na tyle ogarnięty żeby zrobić to samodzielnie!'
    sectionCalculatorProject.classList.remove('close');
    openCalculatorProject.classList.add('activeMenuElement');
    openRegistrationFormProject.classList.remove('activeMenuElement');
    sectionRegistrationFormProject.classList.add('close');
    openBingoGameProject.classList.remove('activeMenuElement');
    sectionBingoGameProject.classList.add('close');
});

const score = document.querySelector('.score');
const operation = document.querySelector('.operation');
const btnClear = document.querySelector('.btnClear');
const btnDelete = document.querySelector('.btnDelete');
const btnAction = document.querySelectorAll('.btnAction');
const btnNumber = document.querySelectorAll('.btnNumber');
const btnEqual = document.querySelector('.btnEqual');

let newActivity = '';
let lastActivity = '';
let action = undefined;

const updateScore = () => {
    operation.innerText = newActivity;
    if(action != null) {
        score.innerText = lastActivity + action;
    } else {
        lastActivity.innerText = '';
    }
    
}

const addNumber = (number) => {
    if (number === ',') {
        if (newActivity.includes(',')) {
            return
        }
    }
    newActivity = newActivity.toString() + number.toString()
}

btnNumber.forEach((number) => {
    number.addEventListener('click', () => {
        addNumber(number.innerText);
        updateScore();
    })
})

const deleteNumber = () => {
    newActivity = newActivity.toString().slice(0, -1);
    updateScore();

}

btnDelete.addEventListener('click', deleteNumber)

btnClear.addEventListener('click', () => {
    newActivity = '';
    lastActivity = ''
    updateScore();

});

// const calculate () => {
//     if (!lastActivity || !newActivity) {
//         return
//     }

//     const last = parseFloat(lastActivity);
//     const actual = parseFloat(newActivity);

//     if(isNaN(last) || isNaN(actual)){
//         return
//     }

    
// }

const selectOperation = (operator) => {
    if (newActivity === '') {
        return
    }
    if (lastActivity !== '') {
        calculate()
    }
    action = operator;
    lastActivity = newActivity;
    newActivity = '';
}

btnAction.forEach((operator) => {
    operator.addEventListener('click', () => {
        selectOperation(operator.innerText)
        updateScore()
    })
})