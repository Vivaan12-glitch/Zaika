<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: register.html");
    exit();
}

// Display user information
echo "<h1>Welcome, " . $_SESSION['name'] . "!</h1>";
echo "<p>Email: " . $_SESSION['email'] . "</p>";
echo "<img src='" . $_SESSION['profile_pic'] . "' alt='Profile Picture'>";
?>
