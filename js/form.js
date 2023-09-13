
// бургер
let hamb = document.querySelector('#hamburger');
let popup = document.querySelector('#popup');
let menu = document.querySelector('#menu').cloneNode(1);
let body = document.body;

hamb.addEventListener('click', hambHandler);
function renderPopup() {
    popup.appendChild(menu);
}
function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

let links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick() {
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}

// форма
let rewiewForm = document.getElementById('form');//форма с которой будем работать
console.log(rewiewForm.elements);
let rewiewButton = rewiewForm.querySelector('button.review-post__btn');
let formBtn = rewiewForm.querySelector('button.form__btn');
let inputName = rewiewForm.name;
let inputRating = rewiewForm.rating;
let errorName = rewiewForm.getElementsByClassName(`review-post__input-name-error`)[0];
let errorRating = rewiewForm.getElementsByClassName(`review-post__input-rating-error`)[0];

//вычленили из html все нужные переменные
rewiewForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
});
rewiewButton.onclick = getInput;
function getInput() {
    let nameUs = document.querySelector(`.review-post__input-name`).value;
    let rating = +document.querySelector(`.review-post__input-rating`).value;
    // получаем значения ввода из инпута по клику кнопки с помощью .value
    if (nameUs === ``) {
        errorRating.style.visibility = `hidden`;
        errorName.style.visibility = `visible`;
    }
    else if (nameUs !== `` && nameUs.length < 2) {
        errorRating.style.visibility = `hidden`;
        errorName.innerHTML = `Имя не может быть короче 2-хсимволов`;
        errorName.style.visibility = `visible`;
    }
    else if (nameUs !== `` && nameUs.length >= 2) {
        errorName.style.visibility = `hidden`;
        errorRating.style.visibility = `visible`;
    }
    if (rating > 0 && rating < 6) {
        errorRating.style.visibility = `hidden`;
    }
    if (nameUs !== `` && nameUs.length >= 2 && rating > 0 && rating < 6) {//после успешной валидации чистим объект с инфой из инпутов 
        rewiewForm.reset();
        localStorage.clear(formData);
    }
}
//убираем подсказку ошибки при вводе нового значения в инпут
function hideErrorName() {
    errorName.style.visibility = `hidden`;
};
inputName.onclick = hideErrorName;
function hideRatingName() {
    errorRating.style.visibility = `hidden`
};
inputRating.onclick = hideRatingName;

let formData = {};//переменная для хранения информации из инпутов
rewiewForm.addEventListener(`input`, function (e) {
    formData[e.target.name] = e.target.value;//передаем данные из инпутов в переменную для хранения
    localStorage.setItem(`formData`, JSON.stringify(formData));//передаем переменную на хранение в LS, конвертировав в строку
});
// восстанавливаем данные
if (localStorage.getItem(`formData`)) {
    formData = JSON.parse(localStorage.getItem(`formData`));
    for (let key in formData) {
        rewiewForm.elements[key].value = formData[key];
        console.log(formData[key])
    }
}
