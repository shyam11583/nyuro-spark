
<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';  // Change to your database username
$password = '';      // Change to your database password
$database = 'nyuro_strategies';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
