<?php
include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $query = "INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssss", $username, $email, $mobile, $password);
    
    if ($stmt->execute()) {
        echo "Signup successful! Please login.";
    } else {
        echo "Signup failed. Username or email may already exist.";
    }
    
    $stmt->close();
    $conn->close();
}
?>
