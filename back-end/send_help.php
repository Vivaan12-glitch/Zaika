<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL); // Validate email
    $name = htmlspecialchars(trim($_POST['name']));
    $problem = htmlspecialchars(trim($_POST['problem']));
    
    // Your email address
    $to = "jadityaprasad17@gmail.com";  // The email where you want to receive the help requests
    
    // Email subject
    $subject = "New Help Request from " . $name;
    
    // Email body
    $message = "Name: $name\nEmail: $email\nProblem: $problem";
    
    // Headers for the email
    $headers = "From: noreply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n"; // Use the user's email as the reply-to address
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
