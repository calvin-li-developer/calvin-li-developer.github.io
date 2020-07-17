
function navClick() {
    'use strict';
    const navPanel = document.getElementById('navbtn-panel');
    console.log(navPanel.style.visibility)
    if (navPanel.style.visibility !== '') {
        navPanel.style.visibility = "";

    } else {
        navPanel.style.visibility = "visible";
    }
}

window.onscroll = function () {
    'use strict';
    const myNav = document.getElementById("nav");

    if (document.documentElement.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight || document.body.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight) {
        myNav.classList.add("nav-background");
    } else {
        myNav.classList.remove("nav-background");
    }
};