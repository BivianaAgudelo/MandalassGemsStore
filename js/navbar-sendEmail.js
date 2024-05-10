// Lógica para ocultar el nav en responsive

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// PRACTICANDO



// FIN PRACTICANDO

// // Validación campo email
// const userEmail = document.querySelector(".email");
// const emailError = document.querySelector("#emailError");

// userEmail.addEventListener("blur", function (event) {
//     const emailValue = userEmail.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailValue.length === 0) {
//         userEmail.classList.add("invalid");
//         emailError.innerText = "El correo electrónico es requerido";
//     } else if (emailValue.length < 5) {
//         userEmail.classList.add("invalid");
//         emailError.innerText = "El correo electrónico debe tener al menos 5 caracteres";
//     } else if (!emailRegex.test(emailValue)) {
//         userEmail.classList.add("invalid");
//         emailError.innerText = "El campo E-mail debe tener un formato válido.";
//     } else {
//         userEmail.classList.remove("invalid");
//         emailError.innerText = "";
//     }
// });


// // Habilitar el botón de enviar cuando el campo de correo electrónico es válido
// userEmail.addEventListener("input", function () {
//     const emailValue = userEmail.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const enviarBtn = document.getElementById("enviarBtn");

//     if (emailRegex.test(emailValue)) {
//         enviarBtn.disabled = false;
//     } else {
//         enviarBtn.disabled = true;
//     }
// });

// // Mostrar modal al hacer clic en el botón de enviar
// const enviarBtn = document.getElementById("enviarBtn");
// enviarBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     const emailValue = userEmail.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const modal = document.getElementById("myModal");

//     if (emailRegex.test(emailValue)) {
//         modal.style.display = "block";
//         // Limpiar el campo de correo electrónico después de enviar
//         userEmail.value = "";
//         enviarBtn.disabled = true; // Deshabilitar el botón después de enviar
//     }
// });

// // Cerrar el modal
// const closeModalBtn = document.querySelector(".close");
// closeModalBtn.addEventListener("click", function () {
//     const modal = document.getElementById("myModal");
//     modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//     const modal = document.getElementById("myModal");
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });


