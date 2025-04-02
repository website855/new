document.addEventListener("DOMContentLoaded", function () {
    // Retrieve logged-in user data from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
        // Update profile fields with user data
        document.getElementById("username").textContent = user.username || "Not Provided";
        document.getElementById("points").textContent = user.points || "0";

        // Optional: If user has a profile image, update it
        if (user.profileImage) {
            document.getElementById("profileImage").src = user.profileImage;
        }
    } else {
        alert("No user logged in! Redirecting to login page.");
        window.location.href = "login.html"; // Redirect if no user found
    }

    // Logout function
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page
    });
});