function navClick() {
    burger = document.getElementById('burger');
    navPanel = document.getElementById('navbtn-panel');

    if (navPanel.style.display != '') {
        navPanel.style.display = ""

    } else {
        navPanel.style.display = "block";
    }
}

var myNav = document.getElementById("nav");

window.onscroll = function () {
    if (document.documentElement.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight || document.body.scrollTop > (document.getElementById('particles-js').clientHeight / 2) - (document.getElementById('full-name-header').clientHeight / 2) - document.getElementById('nav').clientHeight) {
        myNav.classList.add("nav-background");
    } else {
        myNav.classList.remove("nav-background");
    }
};