const form = document.querySelector('form');
const userInputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

const validationUserForm = (regExp, item, errorMessage) => {
    let errorBlock = item.parentNode.querySelector('.error_style');
    if (!errorBlock) {
        errorBlock = document.createElement('p');
        errorBlock.classList.add('error_style');
        item.parentNode.appendChild(errorBlock);
    }
    if (item === userInputs[0] && item.value === '') {
        errorBlock.style.display = 'block';
        errorBlock.textContent = errorMessage;
    } else if (item !== userInputs[0] && !regExp.test(item.value) && item.value !== '') {
        errorBlock.style.display = 'block';
        errorBlock.textContent = errorMessage;
    } else {
        errorBlock.style.display = 'none';
    }

}
const validateValue = (event) => {
    const inputTarget = event.target;
    if (inputTarget === userInputs[0]) {
        validationUserForm(/.+/, userInputs[0], 'Name input is required')
    } else if (inputTarget === textArea) {
        validationUserForm(/.{5,}/, textArea, 'Message should be more than 5 symbols')
    } else if (inputTarget === userInputs[1]) {
        validationUserForm(/^\+380\d{9}$/, userInputs[1], 'Should starts with +380 and 9 digit after country code')
    } else if (inputTarget === userInputs[2]) {
        validationUserForm(/.+@.+\..{2,}$/, userInputs[2], '@ and . required')
    }
}
form.addEventListener('input', validateValue);
form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObj = {};
    formData.forEach((value, key) => formObj[key] = value);

    if (formObj.name === '') {
        alert(`Please write your name`);
    } else if (formObj.message !== '' && formObj.message.length < 5) {
        alert(`Your message should be at least 5 symbols`);
    } else if (formObj.tel !== '' && (!formObj.tel.startsWith('+380') || formObj.tel.length !== 13)) {
        alert(`You wrote incorrect phone number`);
    } else if (formObj.email !== '' && (!formObj.email.includes('@') || !formObj.email.includes('.'))) {
        alert(`Please check your Email-address`);
    } else {
        console.log(formObj);
    }
});