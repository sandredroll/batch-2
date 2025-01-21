// Handle the signup process
function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simple validation (you can add more validation logic here)
    if (username && password && email && phone) {
        console.log("Signed up with:", { username, password, email, phone });
        alert("Signup successful!");
    } else {
        alert("Please fill in all the fields.");
    }
}

