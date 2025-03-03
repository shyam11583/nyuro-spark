
<?php
// Function to clean user inputs
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to get recent blog posts
function get_recent_posts($limit = 3) {
    global $conn;
    $sql = "SELECT id, title, SUBSTRING(content, 1, 150) AS excerpt, image_url, author, created_at 
            FROM blog_posts 
            ORDER BY created_at DESC 
            LIMIT $limit";
    $result = $conn->query($sql);
    
    $posts = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }
    }
    return $posts;
}
?>
