const projectsMainView = document.querySelector('.main');
const openCalculatorProject = document.querySelector('.openCalculatorProject');
const openRegistrationFormProject = document.querySelector('.openRegistrationFormProject');
const openBingoGameProject = document.querySelector('.openBingoGameProject');

const projectSectionName = document.querySelector('h2');
const projectDescription = document.querySelector('.description');

const sectionCalculatorProject = document.querySelector('.sectionCalculatorProject');
const sectionRegistrationFormProject = document.querySelector('.sectionRegistrationFormProject');
const sectionBingoGameProject = document.querySelector('.sectionBingoGameProject');

projectsMainView.addEventListener('click', () => {
    projectSectionName.innerHTML = 'Wybierz projekt';
    projectDescription.innerHTML = '';
    openCalculatorProject.classList.remove('activeMenuElement');
    openRegistrationFormProject.classList.remove('activeMenuElement');
    openBingoGameProject.classList.remove('activeMenuElement');
    sectionCalculatorProject.classList.add('close');
    sectionRegistrationFormProject.classList.add('close');
    sectionBingoGameProject.classList.add('close');
});