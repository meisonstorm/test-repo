openRegistrationFormProject.addEventListener('click', () => {
    projectSectionName.innerHTML = 'Projekt 2: Formularz rejestracyjny';
    projectDescription.innerHTML = `Formularz rejestracyjny zaiwierający następujące walidacje:
    1. Email - musi zawierać znaki '@' i '.'. Planowany rozwój na walidację poprawnych ciagów znaków tzn. "ciąg znaków" + '@' + "ciąg znaków" + '.' + "krótki ciąg znaków (max 4 znaki)"
    2. Hasło - musi zawierać min 1 liczbę, min 1 znak specjalnych i min 8 znaków. Planowany rozwój na min 1 UpperCase.
    3. Potwierdź hasło - musi być identyczne jak hasło.
    4. Regulamin - brak aktywności. Planowany rozwój na wyświetlenie okna (modala?) z przykładowym regulaminem.
    5. Zatwierdź - regulamin musi być zatwierdzony.
    ` ;
    sectionRegistrationFormProject.classList.remove('close');
    openRegistrationFormProject.classList.add('activeMenuElement')
    openCalculatorProject.classList.remove('activeMenuElement')
    sectionCalculatorProject.classList.add('close');
});

const mail = document.querySelector('.mail');
const mailMsg = document.querySelector('.mail-validation');
const password = document.querySelector('.password');
const passwordMsg = document.querySelector('.password-validation');
const confirmPassword = document.querySelector('.confirm-password');
const confirmPasswordMsg = document.querySelector('.confirm-password-validation');
const confirmPolicy = document.querySelector('.confirm-policy');
const confirmPolicyMsg = document.querySelector('.submit-validation');
const btnSubmit = document.querySelector('.btn-submit');

let mailAddress = '';
let passwordInput = '';
let confirmPasswordInput = '';

const mailValidation = () => {
    mailAddress = mail.value
    if (mailAddress === '') {
        mailMsg.innerHTML = '';
        mail.classList.remove('correct')
        mail.classList.remove('error')
    } else {
        if (mailAddress.includes('@' && '.') && mailAddress.length <= 30 && mailAddress.indexOf(' ') <= 0) {
            mailMsg.innerHTML = '1. Wprowadzono poprawny adres email';
            mailMsg.classList.add('correct')
            mailMsg.classList.remove('error')
        } else {
            mailMsg.innerText = '1. Wprowadzono niepoprawny adres email!';
            mailMsg.classList.remove('correct')
            mailMsg.classList.add('error')
        }
    }

}

const passwordValidation = () => {
    passwordInput = password.value;
    if (passwordInput === '') {
        passwordMsg.innerHTML = '';
        password.classList.remove('correct')
        password.classList.remove('error')
    } else {
        if (passwordInput.length >= 8 && passwordInput.includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) && passwordInput.includes('!' || '@' || '#' || '$' || '%' || '^' || '&' || '*' || '(' || ')')) {
            passwordMsg.innerHTML = '2. Wprowadzono poprawne hasło';
            passwordMsg.classList.add('correct')
            passwordMsg.classList.remove('error')
        } else {
            passwordMsg.innerHTML = '2. Wprowadzono niepoprawne hasło! Hasło musi składać się z minimum 8 znaków oraz posiadać minimum 1 cyfrę i 1 znak specjalny.';
            passwordMsg.classList.remove('correct')
            passwordMsg.classList.add('error')
        }
    }

}

const confirmPasswordValidation = () => {
    confirmPasswordInput = confirmPassword.value;
    if (password.value == confirmPassword.value) {
        confirmPasswordMsg.innerText = '3. Hasła są identyczne.'
        confirmPasswordMsg.classList.add('correct');
        confirmPasswordMsg.classList.remove('error');
    } else {
        confirmPasswordMsg.innerText = '3. Hasła są różne!'
        confirmPasswordMsg.classList.remove('correct');
        confirmPasswordMsg.classList.add('error');
        }
    }

const confimrPolicyValidation = () => {
    if (confirmPolicy.checked === true) {
        confirmPolicyMsg.innerText = '';
        alert('Pomyślnie zarejestrowano :)')

    } else {
        confirmPolicyMsg.innerText = '4. Należy zaakceptować regulamin!';
        confirmPolicyMsg.classList.remove('correct');
        confirmPolicyMsg.classList.add('error');
    }
}

mail.addEventListener('focusout', mailValidation);
password.addEventListener('focusout', passwordValidation);
confirmPassword.addEventListener('focusout', confirmPasswordValidation);
btnSubmit.addEventListener('click', confimrPolicyValidation);