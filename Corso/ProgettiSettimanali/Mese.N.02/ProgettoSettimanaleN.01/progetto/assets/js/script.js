const scrollElement = document.getElementById('stRd');
const containerNav = document.getElementById('navBar');
const getStarted = document.getElementById('greenButton');
let emme = document.querySelectorAll("g[stroke-linecap='butt']");

setInterval(() => {
    let random = Math.round(Math.random() * emme.length - 1);
    emme[random].classList.toggle('invisible');
}, 100)

window.addEventListener('scroll', () => {

    if(window.scrollY >= 400){

        containerNav.classList.remove('baseContainerNav');
        containerNav.classList.add('whiteContainerNav');

        getStarted.classList.remove('blackBtn');
        getStarted.classList.add('greenBtn'); 

    }else if(window.scrollY < 400){

        containerNav.classList.add('baseContainerNav');
        containerNav.classList.remove('whiteContainerNav');

        getStarted.classList.add('blackBtn');
        getStarted.classList.remove('greenBtn');

    }
    
});