<?php
session_start();
include 'config.php'; // Include your database connection settings

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "Please log in to remove favorites.";
    exit;
}

// Get the user_id from session
$user_id = $_SESSION['user_id'];

// Get the recipe_id from the POST request
if (isset($_POST['recipe_id'])) {
    $recipe_id = $_POST['recipe_id'];

    // Prepare the SQL statement
    $stmt = $conn->prepare("DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?");
    $stmt->bind_param("ii", $user_id, $recipe_id);

    if ($stmt->execute()) {
        echo "Recipe removed from favorites.";
    } else {
        echo "Error removing favorite: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "No recipe ID provided.";
}

$conn->close();
?>
