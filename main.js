document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name.');
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        if (!emailInput.value.trim()) {
            showError(emailInput, 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        if (phoneInput.value.trim() && !isValidPhone(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number.');
            isValid = false;
        } else {
            showSuccess(phoneInput);
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, 'Please enter your message.');
            isValid = false;
        } else {
            showSuccess(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('was-validated');
        const feedback = formControl.querySelector('.invalid-feedback');
        feedback.textContent = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('was-validated');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(String(phone));
    }

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.fontSize = '20px';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});