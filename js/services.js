"use strict"

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

Array.from(document.querySelectorAll('.room')).map(room => {
    room.addEventListener('click', function (e) {
        const t = e.currentTarget.querySelector('.room__reserved');
        const d = e.currentTarget.querySelector('.room__reserved-reserved');
        const i = e.currentTarget.querySelector('.room__image');

        const addClass = () => {
            t.classList.add('hidden');
            d.classList.add('visible');
            i.classList.add('room__image-reserv');
        };

        const removeClass = () => {
            t.classList.add('visible');
            t.classList.remove('hidden');
            i.classList.remove('room__image-reserv');
            d.classList.add('hidden');
            d.classList.remove('visible');
        };

        if (e.target.classList.contains('room__reserved-btn')) {
            e.currentTarget.onmouseleave = () => {
                debugger
                addClass()
            }
        }
        if (!e.target.classList.contains('room__reserved-btn')) {
            e.currentTarget.onmouseleave = () => {
                removeClass();
            }
        }
    });
});











