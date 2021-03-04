const emailSubmit = document.getElementById('e-submit');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function refreshPage() {
    window.location.reload();
}

emailSubmit.addEventListener('click', () => {
    const emailInput = document.getElementById('e-input').value;

    if (emailInput != "" && emailInput.match(emailPattern)) {
        refreshPage();
    } else {
        alert('Wrong input')
    }
});