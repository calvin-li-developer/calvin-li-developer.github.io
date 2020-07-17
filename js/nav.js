
function navClick() {
    'use strict';
    const NAV_MENU = document.getElementById('navbtn-panel');
    console.log(NAV_MENU.style.visibility)
    if (NAV_MENU.style.visibility !== '') {
        NAV_MENU.style.visibility = "";

    } else {
        NAV_MENU.style.visibility = "visible";
    }
}

window.onscroll = function () {
    'use strict';
    const NAV_BAR = document.getElementById("nav");

    if (document.documentElement.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight || document.body.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight) {
        NAV_BAR.classList.add("nav-background");
    } else {
        NAV_BAR.classList.remove("nav-background");
    }
};