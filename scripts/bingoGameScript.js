openBingoGameProject.addEventListener('click', () => {
    projectSectionName.innerHTML = 'Projekt 3: BINGO';
    projectDescription.innerHTML = 'Prosta gra w Bingo. Losujemy liczby na swoim kuponie i następnie zaznaczamy wylosowane kulki. Powodzenia!'
    sectionBingoGameProject.classList.remove('close');
    openBingoGameProject.classList.add('activeMenuElement');
    openCalculatorProject.classList.remove('activeMenuElement');
    openRegistrationFormProject.classList.remove('activeMenuElement');
    sectionRegistrationFormProject.classList.add('close');
    sectionCalculatorProject.classList.add('close');

});

const drawYourNumbers = document.querySelector('.drawYourNumbers');
const drawnNumber1 = document.querySelector('.drawnNumber1');
const drawnNumber2 = document.querySelector('.drawnNumber2');
const drawnNumber3 = document.querySelector('.drawnNumber3');
const drawnNumber4 = document.querySelector('.drawnNumber4');
const drawnNumber5 = document.querySelector('.drawnNumber5');
const actualNumber = document.querySelector('.actualNumber');
const numbersHistory = document.querySelector('.numbersHistory');
const startGame = document.querySelector('.startGame');
const playAgain = document.querySelector('.playAgain');

const getDrawnNumbers = () => {
    min1 = Math.ceil(1);
    max1 = Math.floor(16);
    drawnNumber1.innerHTML = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

    min2 = Math.ceil(17);
    max2 = Math.floor(32);
    drawnNumber2.innerHTML = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

    min3 = Math.ceil(33);
    max3 = Math.floor(48);
    drawnNumber3.innerHTML = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;

    min4 = Math.ceil(49);
    max4 = Math.floor(64);
    drawnNumber4.innerHTML = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;

    min5 = Math.ceil(65);
    max5 = Math.floor(80);
    drawnNumber5.innerHTML = Math.floor(Math.random() * (max5 - min5 + 1)) + min5;

    drawYourNumbers.classList.add('close')
    startGame.classList.remove('close')
}

let numbersHistoryArr = [];

const setActualNum = () => {
    if (numbersHistoryArr.length < 80) {
        const num = Math.floor(Math.random() * (80 - 1 + 1)) + 1;
        if (numbersHistoryArr.includes(num)) {
            setActualNum();
        } else {
            function compareNumbers(a, b) {
                return a - b;
            }
            numbersHistoryArr.push(num);
            actualNumber.innerHTML = num;
            numbersHistoryArr.sort(compareNumbers);
            numbersHistory.innerHTML = `Wylosowane kulki: ${numbersHistoryArr.join(', ')}`;
        }
    } else {
        actualNumber.innerHTML = `Koniec gry. PRZEGRAŁEŚ! Jesteś gapa :)`;
        startGame.classList.add('close');
        playAgain.classList.remove('close')
    }
};

let matchedNumbersArr = [];

function endGame() {
    if (matchedNumbersArr.length === 5) {
        const numberOfMoves = numbersHistoryArr.length;
        actualNumber.innerHTML = `BINGO! Wygrałeś w ${numberOfMoves} ruchach!`;
        startGame.classList.add('close');
        playAgain.classList.remove('close')
    }
}

const selectDrawnNumber1 = () => {
    if (drawnNumber1.innerHTML == actualNumber.innerHTML && drawnNumber1.innerHTML != '') {
        drawnNumber1.style.color = 'green';
        drawnNumber1.disabled = true;
        matchedNumbersArr.push(actualNumber.innerHTML);
        endGame();
    }
}
const selectDrawnNumber2 = () => {
    if (drawnNumber2.innerHTML == actualNumber.innerHTML && drawnNumber2.innerHTML != '') {
        drawnNumber2.style.color = 'green';
        drawnNumber2.disabled = true;
        matchedNumbersArr.push(actualNumber.innerHTML);
        endGame();
    }
}
const selectDrawnNumber3 = () => {
    if (drawnNumber3.innerHTML == actualNumber.innerHTML && drawnNumber3.innerHTML != '') {
        drawnNumber3.style.color = 'green';
        drawnNumber3.disabled = true;
        matchedNumbersArr.push(actualNumber.innerHTML);
        endGame();
    }
}
const selectDrawnNumber4 = () => {
    if (drawnNumber4.innerHTML == actualNumber.innerHTML && drawnNumber4.innerHTML != '') {
        drawnNumber4.style.color = 'green';
        drawnNumber4.disabled = true;
        matchedNumbersArr.push(actualNumber.innerHTML);
        endGame();
    }
}
const selectDrawnNumber5 = () => {
    if (drawnNumber5.innerHTML == actualNumber.innerHTML && drawnNumber5.innerHTML != '') {
        drawnNumber5.style.color = 'green';
        drawnNumber5.disabled = true;
        matchedNumbersArr.push(actualNumber.innerHTML);
        endGame();
    }
}

const resetGame = () => {
    drawnNumber1.innerHTML = '';
    drawnNumber2.innerHTML = '';
    drawnNumber3.innerHTML = '';
    drawnNumber4.innerHTML = '';
    drawnNumber5.innerHTML = '';
    drawnNumber1.style.color = 'white';
    drawnNumber2.style.color = 'white';
    drawnNumber3.style.color = 'white';
    drawnNumber4.style.color = 'white';
    drawnNumber5.style.color = 'white';
    drawnNumber1.disabled = false;
    drawnNumber2.disabled = false;
    drawnNumber3.disabled = false;
    drawnNumber4.disabled = false;
    drawnNumber5.disabled = false;
    actualNumber.innerHTML = '';
    numbersHistory.innerHTML = '';
    drawYourNumbers.classList.remove('close')
    startGame.classList.add('close');
    playAgain.classList.add('close');
    numbersHistoryArr = [];
    matchedNumbersArr = [];
    
}

drawYourNumbers.addEventListener('click', getDrawnNumbers);
startGame.addEventListener('click', setActualNum);
drawnNumber1.addEventListener('click', selectDrawnNumber1);
drawnNumber2.addEventListener('click', selectDrawnNumber2);
drawnNumber3.addEventListener('click', selectDrawnNumber3);
drawnNumber4.addEventListener('click', selectDrawnNumber4);
drawnNumber5.addEventListener('click', selectDrawnNumber5);
playAgain.addEventListener('click', resetGame);