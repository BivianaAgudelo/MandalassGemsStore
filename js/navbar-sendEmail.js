// Lógica para ocultar el nav en responsive

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// PRACTICANDO

const userEmail = document.querySelector("[name=email]");

const setErrors = () => {
    if (field, isError = true) {
        // field.classList.remove("form__container .email");
        //field.classList.add("invalid");
        // field.classList.replace("email.border", "invalid");
        field.style.border = "1px solid #FF0000"; // Cambiar el estilo del borde
        field.style.boxShadow = "0 0 10px #FF0000"; // Añadir un sombreado
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = `El campo E-mail debe tener un formato válido => ejemplo@email.com`;
    } else {
        field.style.border = "";
        field.style.boxShadow = "";
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}


userEmail.addEventListener("blur", function (e) {
    const field = e.target;
    const emailValue = e.target.value;
    if (emailValue.trim().length === 0) {
        // field.classList.remove("form__container .email");
        //field.classList.add("invalid");
        // field.classList.replace("email.border", "invalid");
        field.style.border = "1px solid #FF0000"; // Cambiar el estilo del borde
        field.style.boxShadow = "0 0 10px #FF0000"; // Añadir un sombreado
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "El correo electrónico es requerido";
    } else {
        field.style.border = "";
        field.style.boxShadow = "";
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

const validateEmailFormat = e => {
    const field = e.target;
    const emailValue = e.target.value;
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (emailValue.trim().length > 5 && !regex.test(emailValue)) {
        // field.classList.remove("form__container .email");
        //field.classList.add("invalid");
        // field.classList.replace("email.border", "invalid");
        field.style.border = "1px solid #FF0000"; // Cambiar el estilo del borde
        field.style.boxShadow = "0 0 10px #FF0000"; // Añadir un sombreado
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = `El campo E-mail debe tener un formato válido => ejemplo@email.com`;
    } else {
        field.style.border = "";
        field.style.boxShadow = "";
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

userEmail.addEventListener("input", validateEmailFormat);


// FIN PRACTICANDO

// // Validación campo emaildddd
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


