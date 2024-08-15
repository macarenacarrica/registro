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

// Validar que la contraseña tenga al menos 6 caracteres
if (password1.length < 6) {
    showAlertError();
    return;
}
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}