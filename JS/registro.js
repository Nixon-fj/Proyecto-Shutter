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

    let name = document.getElementById('name');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Nombre requerido";
        showErrorMsg(name, msg);
        hasErrors = true;
    }

    let ape = document.getElementById('lastname');
    if (validator.isEmpty(ape.value)) {
        ape.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Apellido requerido";
        showErrorMsg(ape, msg);
        hasErrors = true;
    }

    let password = document.getElementById('password');
    if (validator.isEmpty(password.value)) {
        password.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Requiere una contraseña";
        showErrorMsg(password, msg);
        hasErrors = true;
    }

    let email = document.getElementById('mail');
    if (!validator.isEmail(email.value)) {
        console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Igresa tu correo";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    if (hasErrors) {
        return false;
    } else { return true; }

};