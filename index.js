const ageInput = document.getElementById('ageInput');
const FullNameInput = document.getElementById('FullNameInput');
const emailInput = document.getElementById('emailInput');
const dobInput = document.getElementById('dobInput');
const formProgress = document.getElementById('formProgress');

FullNameInput.addEventListener('input', function () {
    validateFullName(this);
});

ageInput.addEventListener('input', function () {
    validateAge(this);
});

emailInput.addEventListener('input', function () {
    validateEmail(this);
});

dobInput.addEventListener('input', function () {
    validateInput(this);
});

function validateFullName(field) {
    if (/[^a-z A-Z]/.test(field.value)) {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    updateProgressBar();
}

function validateAge(field) {
    if (/[^0-9]+$/.test(field.value)) {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    updateProgressBar();
}

function validateEmail(field) {
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(field.value)) {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    updateProgressBar();
}

function validateInput(field) {
    if (field.value.trim() === "") {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
    updateProgressBar();
}

function updateProgressBar() {
    const inputs = document.querySelectorAll('.form-control');
    const validInputs = Array.from(inputs).filter(input => input.classList.contains('is-valid')).length;
    const totalInputs = inputs.length;
    const progress = (validInputs / totalInputs) * 100;
    formProgress.style.width = progress + '%';
    formProgress.textContent = progress + ' %';
}


