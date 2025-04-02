document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const enteredUsernameOrEmail = document.getElementById("fullname").value; // Using fullname input for username or email
            const enteredPassword = document.getElementById("password").value;
            const errorMessage = document.getElementById("loginError");

            // Retrieve user from localStorage
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (
                storedUser &&
                (storedUser.username === enteredUsernameOrEmail || storedUser.email === enteredUsernameOrEmail) &&
                storedUser.password === enteredPassword
            ) {
                alert("Login successful!");

                // Store only username & email in localStorage
                const loggedInUser = {
                    username: storedUser.username,
                    email: storedUser.email
                };
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                // Redirect to profile page
                window.location.href = "home.html";
            } else {
                errorMessage.textContent = "Invalid username/email or password!";
            }
        });
    }

    // Load profile data if on profile page
    if (window.location.pathname.includes("home.html")) {
        loadProfile();
    }
});

// Function to load user profile
function loadProfile() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
        document.getElementById("username").textContent = user.username;
        document.getElementById("email").textContent = user.email;
    } else {
        alert("No user logged in! Redirecting to login...");
        window.location.href = "login.html";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}