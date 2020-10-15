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

    let name = document.getElementById('name');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Nombre requerido";
        showErrorMsg(name, msg);
        hasErrors = true;
    }

    let title = document.getElementById('picture-title');
    if (validator.isEmpty(title.value)) {
        title.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Agregue un titulo para la imagen";
        showErrorMsg(title, msg);
        hasErrors = true;
    }

    let comment = document.getElementById('descrip-picture');
    if (validator.isEmpty(comment.value)) {
        comment.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Descripcion requerida";
        showErrorMsg(comment, msg);
        hasErrors = true;
    }

    let email = document.getElementById('mail');
    if (!validator.isEmail(email.value)) {
        console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Agregue un correo valido";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    /*let picture = document.getElementById('file-picture');
    if(!validator.isFile(picture.value)){
        picture.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "No se ha cargado ningun archivo";
        showErrorMsg(picture, msg);
        hasErrors = true;
    }

    let category = document.getElementById('category');
    if (category.value === defaul) {
        category.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Agregue categoria para la imagen";
        showErrorMsg(category, msg);
        hasErrors = true;
    }*/

    if (hasErrors) {
        return false;
    } else { return true; }

};