document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const rePassword = document.getElementById("repassword").value;

            if (password !== rePassword) {
                alert("Passwords do not match!");
                return;
            }

            // Create user object
            const user = {
                username: fullname,
                email: email,
                password: password
            };

            // Store in localStorage
            localStorage.setItem("user", JSON.stringify(user));

            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }
});