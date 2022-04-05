const menuBtn = document.querySelector('.hamburger-container');

const navbar = document.querySelector('.navbar-container');

const menuBar = document.querySelector('.hamburger-bar')
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBar.classList.add('navbar-open');
        navbar.classList.add('navbar-collapse');
        menuOpen = true;
    }
    else{
        menuBar.classList.remove('navbar-open');
        navbar.classList.remove('navbar-collapse');
        menuOpen = false;
    }
});