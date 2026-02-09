<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root"; // MySQL username
$password = ""; // MySQL password
$dbname = "zaika"; // Database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response = ["status" => "OK"]; // Default response

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = trim($_POST['username']);
    $pass = trim($_POST['password']);

    // Check if the username exists in the database
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // User exists, verify password
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row['password'])) {
            // Password is correct, set session variables
            $_SESSION['loggedIn'] = true;
            $_SESSION['username'] = $user;

            $response["status"] = "SUCCESS";
            $response["redirect"] = "home.html"; // Redirect to homepage
        } else {
            // Incorrect password
            $response["status"] = "INVALID";
            $response["message"] = "Invalid username or password.";
        }
    } else {
        // User doesn't exist
        $response["status"] = "NOT_FOUND";
        $response["message"] = "User doesn't exist. <a href='register.html'>Please register</a>.";
    }

    $stmt->close();
}

$conn->close();

echo json_encode($response); // Return response as JSON
?>
