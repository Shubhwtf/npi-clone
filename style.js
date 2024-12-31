document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age <= 0 || !age) {
        isValid = false;
        document.getElementById('ageError').textContent = 'Please enter a valid age.';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
    }

    // If the form is valid, alert the success
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('userForm').reset();
    }
});