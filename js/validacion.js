document.getElementById('regBtn').addEventListener('click', validateForm);

function validateForm() {
    // conseguir valores de los campos necesarios para rellenar formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    // check que ningún campo esté vacío
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '') {
        showAlertError();
        return;
    }

// la contraseña debe tener al menos 6 carácteres
if (password1.length < 6) {
    showAlertError();
    return;
}
// Validar que las contraseñas sean iguales
    if (password1 !== password2) {
        showAlertError();
        return;
    }

// Validar que se hayan aceptado los términos y condiciones
    if (!terminos) {
        showAlertError();
        return;
    }

// Si todas las validaciones se cumplen, mostrar alerta de éxito
    showAlertSuccess();
}
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
