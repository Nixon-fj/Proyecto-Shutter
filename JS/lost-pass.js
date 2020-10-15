/*validador de form*/


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
    let email = document.getElementById('correo');
    if (!validator.isEmail(email.value)) {
        console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Email es invalido";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    if (hasErrors) {
        return false;
    } else { return true; }

};