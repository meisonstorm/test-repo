// MENU
const projectsMainView = document.querySelector('.main');
const openCalculatorProject = document.querySelector('.openCalculatorProject');

const projectSectionName = document.querySelector('h2')
const sectionCalculatorProject = document.querySelector('.sectionCalculatorProject');

projectsMainView.addEventListener('click', () => {
    sectionCalculatorProject.classList.add('close');
    projectSectionName.innerHTML = ''
});