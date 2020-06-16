'use strict';

function navClick() {
    const burger = document.getElementById('burger');
    const navPanel = document.getElementById('navbtn-panel');

    if (navPanel.style.display != '') {
        navPanel.style.display = "";

    } else {
        navPanel.style.display = "block";
    }
}

window.onscroll = function () {
    const myNav = document.getElementById("nav");

    if (document.documentElement.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight || document.body.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight) {
        myNav.classList.add("nav-background");
    } else {
        myNav.classList.remove("nav-background");
    }
};