document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Handle Signup
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Firebase signup
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Signup successful! You can now log in.');
                signupForm.reset();
            })
            .catch((error) => {
                alert(error.message);
            });
    });

    // Handle Login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Firebase login
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login successful!');
                // Redirect to MainMenu.html
                window.location.href = 'MainMenu.html';
            })
            .catch((error) => {
                alert('Invalid email or password.');
            });
    });
});
