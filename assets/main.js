const handleForm = (e, int) => {

    const email = document.getElementById(`EMAIL${int}`).value;
    const name = document.getElementById(`NOME${int}`).value;
    const terms = document.getElementById(`${int === 1 ? 'ebook' : 'newsletter'}-terms`).checked;

    const nameField = document.getElementsByClassName(`form${int}-name`)[0];
    const emailField = document.getElementsByClassName(`form${int}-email`)[0];
    const termsField = document.getElementsByClassName(`form${int}-terms`)[0];


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

    if (!terms) {
        e.preventDefault();
        termsField.className = `accept-terms form${int}-terms error`
    } else {
        termsField.className = `accept-terms form${int}-terms`
    }

}