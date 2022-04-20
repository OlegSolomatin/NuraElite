const menuBtn = document.querySelector('.menu-btn');
    //menuMob = document.querySelector('.containerMobileMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        //menuMob.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        //menuMob.classList.remove('open');
        menuOpen = false;
    }
});