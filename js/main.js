let burgerBlock = document.querySelector('.burger');
let line1 = document.querySelector('.burger__line-1');
let line2 = document.querySelector('.burger__line-2');
let line3 = document.querySelector('.burger__line-3');
let burgerMenu = document.querySelector('.burger__menu');
let body = document.querySelector('body');

const menuBurger = () => {
    burgerMenu.classList.toggle('visible');
    body.classList.toggle('body__scroll');
}
document.addEventListener('DOMContentLoaded', () => {
    window.onresize = () => {
        if (document.documentElement.clientWidth < 950) {
            body.classList.toggle('body__scroll');
        }
    }
})


burgerBlock.addEventListener('click', () => {
    line1.classList.toggle('rotate1');
    line2.classList.toggle("hidden");
    line3.classList.toggle('rotate2');
    menuBurger();
})