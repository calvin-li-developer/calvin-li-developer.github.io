document.getElementById("copyright").innerHTML = "© " + new Date().getFullYear() + " Calvin Li";

function menuClickDisplay() {
  "use strict";
  const navMenuBtns = document.querySelectorAll(".nav-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const menuBurger = document.querySelector(".menu-burger");
  navMenuBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (getComputedStyle(menuBurger).display === "block") {
        navMenu.style.display = "none";
      }
    });
  });
}

function onClickMenuBurger() {
  "use strict";
  const menuBurger = document.querySelector(".menu-burger");
  const navMenu = document.querySelector(".nav-menu");
  menuBurger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "block" ? "" : "block";
  });
}

window.onscroll = () => {
  "use strict";
  const navMenuBar = document.querySelector("nav");
  const threshold = document.querySelector("#particles-js").clientHeight / 2 -
    document.querySelector(".welcome").clientHeight -
    document.querySelector(".name").clientHeight -
    navMenuBar.clientHeight;

  if (document.documentElement.scrollTop > threshold || document.body.scrollTop > threshold) {
    navMenuBar.classList.add("nav-background");
  } else {
    navMenuBar.classList.remove("nav-background");
  }
};

menuClickDisplay();
onClickMenuBurger();