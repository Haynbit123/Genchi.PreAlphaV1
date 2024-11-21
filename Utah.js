document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        // Save user data to local storage
        localStorage.setItem(username, password);
        alert('Signup successful! You can now log in.');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Retrieve user data from local storage
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
            alert('Login successful!');
            // Redirect to the main page or user dashboard
        } else {
            alert('Invalid username or password.');
        }
    });
});
