const inputs = document.querySelectorAll('input')
const btnSubmit = document.getElementById('btn-submit');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function addClass(x) {
    return x.classList.add('invalid');
};

function removeClass(x) {
    return x.classList.remove('invalid');
};

function emailMatch(e) {
    return !e.match(emailPattern);
}


inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        const firstName = document.getElementById('fname');
        const lastName = document.getElementById('lname');
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        const errors = [];

        if (firstName.value == "") {
            addClass(firstName);
            errors.push('fname');
        } else {
            removeClass(firstName);
        }
        if (lastName.value == "") {
            addClass(lastName);
            errors.push('lname');
        } else {
            removeClass(lastName);
        }
        if (email.value == "" || emailMatch(email.value)) {
            addClass(email);
            errors.push('email');
        } else {
            removeClass(email);
        }
        if (pass.value == "" || pass.value.length < 8) {
            addClass(pass);
            errors.push('pass');
        } else {
            removeClass(pass);
        }



        btnSubmit.addEventListener('click', (e) => {
            if (errors.length > 0) {
                e.preventDefault();
            } else {
                window.location.reload();
            }
        });
    });
});