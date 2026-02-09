<?php
session_start();

// Check if the user is logged in, if not redirect to login page
if (!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true) {
    header("Location: login.html");
    exit;
}

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

// Get the logged-in user's username
$user = $_SESSION['username'];

// Fetch user's data from the database (e.g., favorite recipes, profile info, etc.)
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();
$userData = $result->fetch_assoc();

// Fetch personalized content such as recipes
$recipesSql = "SELECT * FROM recipes WHERE user_id = ?";
$stmt = $conn->prepare($recipesSql);
$stmt->bind_param("i", $userData['id']);
$stmt->execute();
$recipesResult = $stmt->get_result();

// Close connection
$stmt->close();
$conn->close();
?>

<!-- Now include the HTML layout -->
<?php include('home.html'); ?>

<script>
    // Add dynamic content to the featured-recipes section
    document.querySelector('.featured-recipes').innerHTML = `
        <?php
        if ($recipesResult->num_rows > 0) {
            while ($recipe = $recipesResult->fetch_assoc()) {
                echo "<div class='recipe-item'>
                        <img src='" . htmlspecialchars($recipe['image_path']) . "' alt='" . htmlspecialchars($recipe['name']) . "'>
                        <h3>" . htmlspecialchars($recipe['name']) . "</h3>
                        <p>" . htmlspecialchars($recipe['description']) . "</p>
                      </div>";
            }
        } else {
            echo "<p>No recipes found.</p>";
        }
        ?>
    `;
</script>

