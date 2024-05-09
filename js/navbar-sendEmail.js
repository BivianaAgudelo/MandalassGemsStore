// Lógica para ocultar el nav en responsive

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});


// Lógica para abrir y cerrar modal de enviar email


const modal = document.querySelector(".container__modal");
const buttonSendEmail = document.querySelector(".button__sendEmail");
const etiquetaSpan = document.querySelector(".close");

// Cuando el usuario hace clic en el botón, se abre la ventana
buttonSendEmail.addEventListener("click", function() {
    modal.style.display = "block";
});

// Si el usuario hace clic en la x, la ventana se cierra
etiquetaSpan.addEventListener("click", function() {
    modal.style.display = "none";
});

// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
