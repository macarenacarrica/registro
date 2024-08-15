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
