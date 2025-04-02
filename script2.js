document.addEventListener("DOMContentLoaded", () => {
    // SIGNUP FORM HANDLING
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("signupUsername").value;
            const email = document.getElementById("signupEmail").value;
            const mobile = document.getElementById("signupMobile").value;
            const password = document.getElementById("signupPassword").value;

            fetch("signup.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `username=${username}&email=${email}&mobile=${mobile}&password=${password}`
            })
            .then(response => response.text())
            .then(data => {
                if (data.includes("success")) {
                    alert("Signup successful! You can now log in.");
                    window.location.href = "login.html"; // Redirect to login page
                } else {
                    document.getElementById("signupMessage").textContent = data;
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    // LOGIN FORM HANDLING
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            fetch("login.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `username=${username}&password=${password}`
            })
            .then(response => response.text())
            .then(data => {
                if (data.includes("successful")) {
                    sessionStorage.setItem("loggedInUser", username); // Store username in session
                    window.location.href = "profile.html"; // Redirect to profile page
                } else {
                    document.getElementById("loginMessage").textContent = data;
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    // PROFILE PAGE HANDLING
    if (window.location.pathname.includes("profile.html")) {
        const loggedInUser = sessionStorage.getItem("loggedInUser");

        if (loggedInUser) {
            document.getElementById("username").textContent = loggedInUser;
        } else {
            alert("No user logged in! Redirecting to login...");
            window.location.href = "login.html";
        }

        // LOGOUT FUNCTION
        document.getElementById("logoutBtn").addEventListener("click", function () {
            sessionStorage.removeItem("loggedInUser");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }
});
