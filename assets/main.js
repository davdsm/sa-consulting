const handleForm = (e, int) => {

    const email = document.getElementById(`EMAIL${int}`).value;
    const name = document.getElementById(`NOME${int}`).value;

    const nameField = document.getElementsByClassName(`form${int}-name`)[0];
    const emailField = document.getElementsByClassName(`form${int}-email`)[0];

    console.log(email)
    console.log(name)

    if (!email) {
        e.preventDefault();
        emailField.className = `form-group form${int}-email error`
    } else {
        emailField.className = `form-group form${int}-email`
    }

    if (!name) {
        e.preventDefault();
        nameField.className = `form-group form${int}-name error`
    } else {
        nameField.className = `form-group form${int}-name`
    }

}