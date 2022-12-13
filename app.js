const form = document.querySelector("form"); 
const formContainer = document.querySelector(".form__container"); 
const cardName = document.querySelector(".card__name"); 
const cardNumber = document.querySelectorAll(".card__4-digits"); 
const cardDate = document.querySelector(".card__date"); 
const cardCSV = document.querySelector(".card__csv"); 
const formInput = document.querySelectorAll(".form__input"); 
const formError = document.querySelectorAll(".form__error"); 
const thanks = document.querySelector(".thanks"); 

form.addEventListener("submit", (e) => {
    resetForm(); 
    e.preventDefault(); 
    let counter = 0; 

    cardName.textContent = formInput[0].value; 
    cardNumber[0].textContent = formInput[1].value.slice(0,4); 
    cardNumber[1].textContent = formInput[1].value.slice(4,8); 
    cardNumber[2].textContent = formInput[1].value.slice(8,12); 
    cardNumber[3].textContent = formInput[1].value.slice(12,16); 
    cardDate.textContent = `${formInput[2].value}/${formInput[3].value}`; 
    cardCSV.textContent = formInput[4].value; 

    if (!/^[a-z ,.'-]+$/i.test(formInput[0].value)) {
        formInput[0].classList.add("form__input--error"); 
        formError[0].classList.add("form__error--visible"); 
        formError[0].textContent = "Wrong format, letters only."
        counter++; 
    }
    if (!/^[0-9]{16}$/.test(formInput[1].value)) {
        formInput[1].classList.add("form__input--error"); 
        formError[1].classList.add("form__error--visible"); 
        formError[1].textContent = "Wrong format, must be 16 digits, numbers only."
        counter++; 
    }
    if (!/^[0][1-9]$|^[1][0-2]$/.test(formInput[2].value)) {
        formInput[2].classList.add("form__input--error"); 
        formError[2].classList.add("form__error--visible"); 
        formError[2].textContent = "Can't be blank and must use proper format for dates"
        counter++; 
    }
    if (!/^[2][2-9]$/.test(formInput[3].value)) {
        formInput[3].classList.add("form__input--error"); 
        formError[2].classList.add("form__error--visible"); 
        if (formError[2].textContent) {
            formError[2].textContent = "Can't be blank and must use proper format for dates"
        }
        counter++; 
    }
    if (!/^[0-9]{3}$/.test(formInput[4].value)) {
        formInput[4].classList.add("form__input--error"); 
        formError[3].classList.add("form__error--visible"); 
        formError[3].textContent = "Can't be blank, must use proper format"; 
        counter++; 
    }
    if (counter === 0) {
        formContainer.style.display = "none"; 
        thanks.classList.add("thanks--visible"); 
    }
}); 

function resetForm() {
    for (let i = 0; i < formInput.length; i++) {
        formInput[i].classList.remove("form__input--error"); 
    }
    for (let i = 0; i < formError.length; i++) {
        formError[i].classList.remove("form__error--visible"); 
        formError[i].textContent = ""; 
    }
}