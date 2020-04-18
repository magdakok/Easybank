    const navBackground = document.querySelector('.nav-background');
    const navList = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.hamburger-label');
    var hamburgerSvg = document.querySelector('.hamburger-label img');

    const hamburgerLines = document.querySelector('.hamburger-label img[src="img/icon-hamburger.svg"]');
    const hamburgerClose = document.querySelector('.hamburger-label img[src="img/icon-close.svg"]');

    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.querySelector('body');

    //when clicked on nav hamburger
    hamburgerLines.addEventListener('click', function(){
        
        navBackground.classList.toggle('nav-background-opacity');
        navList.classList.toggle('show-mobile-nav');
        body.classList.toggle('no-overflow-y');

        //it turns into close icon
        hamburgerSvg.src="img/icon-close.svg";
    });

    //so when clicked on close icon
    if (hamburgerClose) {
        
        hamburgerClose.addEventListener('click', function(){
        //i want normal hamburger icon back, but it doesn't work
        hamburgerSvg.src="img/icon-hamburger.svg";
    });
}

    navBackground.addEventListener('click', hideNav);

    for(let el of navLinks) {
        el.addEventListener('click', hideNav);
    }
    
    function hideNav() {
        navBackground.classList.remove('nav-background-opacity');
        navList.classList.remove('show-mobile-nav');
        body.classList.toggle('no-overflow-y');
        hamburgerSvg.src="img/icon-hamburger.svg";
    }

