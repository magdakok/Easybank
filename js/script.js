var navBackground = document.querySelector('.nav-background');
var navList = document.querySelector('.nav__list');

function toggleMenu() {
    var checkBoxValue = document.getElementById('hamburger').checked;
    var navList = document.querySelector('.nav__list');
    if (checkBoxValue) {
        navBackground.style.opacity='1';
        navList.style.display = 'block';
        navBackground.addEventListener('click', function(){
            navBackground.style.opacity = '0';
            navList.style.display = 'none';
            checkBoxValue = false;
        });
    } else {
        navBackground.style.opacity='0';
        navList.style.display = 'none';
    }
}
