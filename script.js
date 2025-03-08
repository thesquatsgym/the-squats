let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Started at feb 2020','To create a healthy enviroment in our town.','Our target is to give training people to get health and fit.','fat lose','weight lifting','running'],
    typeSpeed: 60,
    backspeed:60,
    backDelay:1000,
    loop:true,
  });