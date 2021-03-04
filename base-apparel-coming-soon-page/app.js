const emailSubmit = document.getElementById('email-submit');
const error = document.getElementById('error');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

emailSubmit.addEventListener('click', (e) => {
    const emailInput = document.getElementById('email-input');
    e.preventDefault();

    if (emailInput.value != "" && emailInput.value.match(emailPattern)) {
        // do something
        error.style.visibility = "hidden";
        window.location.reload();
    } else {
        error.style.visibility = "visible";
    }
});
