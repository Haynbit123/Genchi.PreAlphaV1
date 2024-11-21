document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Handle Signup
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        try {
            // Check if username already exists
            const snapshot = await firebase.database().ref('users/' + username).once('value');
            if (snapshot.exists()) {
                alert('Username already taken.');
                return;
            }

            // Firebase signup
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(`${username}@example.com`, password);
            await firebase.database().ref('users/' + username).set({
                uid: userCredential.user.uid
            });

            alert('Signup successful! You can now log in.');
            signupForm.reset();
        } catch (error) {
            alert(error.message);
        }
    });

    // Handle Login
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
            // Retrieve user UID by username
            const snapshot = await firebase.database().ref('users/' + username).once('value');
            if (!snapshot.exists()) {
                alert('Invalid username or password.');
                return;
            }
            const uid = snapshot.val().uid;

            // Log in with Firebase
            const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(`${username}@example.com`);
            if (signInMethods.length === 0) {
                alert('Invalid username or password.');
                return;
            }

            await firebase.auth().signInWithEmailAndPassword(`${username}@example.com`, password);
            alert('Login successful!');
            // Redirect to MainMenu.html
            window.location.href = 'MainMenu.html';
        } catch (error) {
            alert('Invalid username or password.');
        }
    });
});
