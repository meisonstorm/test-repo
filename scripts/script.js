// MENU
const btnProjects = document.querySelectorAll('.projects'); //selektor slaby dla buttona, moze wystarczylo by po prostu 
// zrobic <div class="projectsButtonsContainer"><button></button></div> document.querySelectorAll('.projectsButtonsContainer button')
const btnClose = document.querySelector('.close'); //nie musi wcale zwrocic buttona 
const btnCalc = document.querySelector('.projCalc'); //slaby selektor nic nie mowiaca nazwa
const areaCalc = document.querySelector('.secCalculator');

debugger
btnProjects.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('close');
        btnClose.classList.remove('close');
        areaCalc.classList.remove('close');
    });
});
// to co na gorze mozna zamienic na cos takiego, https://dev.to/shimphillip/handing-javascript-events-efficiently-with-bubble-and-capture-4ha5
document.querySelector('.selectProject').addEventListener('click', (event) => {

    event.target.classList.add('close');
    btnClose.classList.remove('close');
    areaCalc.classList.remove('close');
})


// Project 1 - Calculator

btnCalc.addEventListener('click', () => {
    text.innerHTML = 'Projekt 1: Prosty kalkulator' //moze funkcja gdzie przekazywalo by sie string a ona by zmieniala text? 
    // setHeaderText('Projekt 1: Prosty kalkulator')
});


//ten handler nie odnosi sie do projektu calculator wiec powinien byc na gorze, ogolnie lepiej podzielic na pliki
btnClose.addEventListener('click', () => {
    btnCalc.classList.remove('close');
    btnClose.classList.add('close');
    areaCalc.classList.add('close');
    setHeaderText('')
});

//oddzeilny plik a najlepiej module
const setHeaderText = (msg) => {
    const headerElement = document.querySelector('h2');
    headerElement.innerHTML = msg;
}
