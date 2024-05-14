// Lógica para ocultar el nav en responsive

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// Lógica para validación del campo email

const userEmail = document.querySelector("[name=email]");

const showError = (emailField, message) => {
    emailField.style.border = "1px solid #FF0000";
    emailField.style.boxShadow = "0 0 10px #FF0000";
    emailField.nextElementSibling.classList.add("error");
    emailField.nextElementSibling.innerText = message;
};

const clearError = (emailField) => {
    emailField.style.border = "";
    emailField.style.boxShadow = "";
    emailField.nextElementSibling.classList.remove("error");
    emailField.nextElementSibling.innerText = "";
};

userEmail.addEventListener("blur", function (e) {
    const emailField = e.target;
    const emailValue = emailField.value.trim();

    if (emailValue.length === 0) {
        showError(emailField, "El correo electrónico es requerido");
    } else if (emailValue.length < 5) {
        showError(emailField, "El correo electrónico debe tener al menos 5 caracteres");
    } else {
        clearError(emailField);
    }
});

const validateEmailFormat = e => {
    const emailField = e.target;
    const emailValue = emailField.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue.length > 0 && !regex.test(emailValue)) {
        showError(emailField, "El campo E-mail debe tener un formato válido => ejemplo@email.com");
    } else {
        clearError(emailField);
    }
};

userEmail.addEventListener("input", validateEmailFormat);


// Habilitar el botón de enviar cuando el campo de correo electrónico es válido
userEmail.addEventListener("input", function () {
    const emailValue = userEmail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const enviarBtn = document.getElementById("enviarBtn");

    if (emailRegex.test(emailValue)) {
        enviarBtn.disabled = false;
    } else {
        enviarBtn.disabled = true;
    }
});

// Mostrar modal al hacer clic en el botón de enviar
const enviarBtn = document.getElementById("enviarBtn");
enviarBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const emailValue = userEmail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const modal = document.getElementById("myModal");

    if (emailRegex.test(emailValue)) {
        modal.style.display = "block";
        // Limpiar el campo de correo electrónico después de enviar
        userEmail.value = "";
        enviarBtn.disabled = true; // Deshabilitar el botón después de enviar
    }
});

// Cerrar el modal
const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", function () {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


