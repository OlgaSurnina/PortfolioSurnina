`use strict`
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

//слайдер
// Получаем видимую часть слайда
let viewport = document.getElementById("slider__viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("slider__control-btn-next");
// Получаем кнопку назад
let btnPrev = document.getElementById("slider__control-btn-prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".namber-slide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда а цвет актив
viewSliders[0].style.backgroundColor = "darkgrey";
// viewSliders[0].classList.add("active");

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда в цвет неактив
    // viewSliders[viewSlide].classList.remove("active");
    viewSliders[viewSlide].style.backgroundColor = "grey";
    // Условие, если номер слайда меньше 9
    if (viewSlide < 9) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в актив
    viewSliders[viewSlide].style.backgroundColor = "darkgrey";
    // viewSliders[viewSlide].classList.remove("active");
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда неактив
    viewSliders[viewSlide].style.backgroundColor = "grey";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен 9
        viewSlide = 9;
    }
    // Закрашиваем индикатор слайда в актив
    viewSliders[viewSlide].style.backgroundColor = "darkgrey";
    // viewSliders[viewSlide].classList.remove("active");
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});


