    const navBackground = document.querySelector('.nav-background');
    const navList = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.hamburger-label');
    const navLink = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', function(){
        navBackground.classList.toggle('nav-background-opacity');
        navList.classList.toggle('show-mobile-nav');
    });

    navBackground.addEventListener('click', hideNav);
    navList.addEventListener('click', hideNav);


    function hideNav() {
        navBackground.classList.remove('nav-background-opacity');
        navList.classList.remove('show-mobile-nav');
    }

