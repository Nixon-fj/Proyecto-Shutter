/*-----------validador de input-------------------*/
function showErrorMsg(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    hideError(referenceNode);
}

function hideError(el) {
    el.addEventListener("blur", (event) => {
        el.classList.remove("error");
        if (el.nextElementSibling !== null) {
            el.nextElementSibling.remove();
        }
    });
}

function checkForm() {

    let hasErrors;

    let name = document.getElementById('user');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Usuario invalido";
        showErrorMsg(name, msg);
        hasErrors = true;
    }

    let password = document.getElementById('password');
    if (validator.isEmpty(password.value)) {
        password.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Contraseña incorrecta";
        showErrorMsg(password, msg);
        hasErrors = true;
    }

    if (hasErrors) {
        return false;
    } else { return true; }

};