const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
})