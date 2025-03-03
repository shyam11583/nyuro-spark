
<?php
session_start();
require_once '../includes/db-connect.php';

// If already logged in, redirect to admin dashboard
if (isset($_SESSION['admin_id'])) {
    header('Location: index.php');
    exit;
}

$username = $password = "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Validate inputs
    if (empty($username) || empty($password)) {
        $error = "Both username and password are required";
    } else {
        // Check if user exists
        $stmt = $conn->prepare("SELECT id, username, password FROM admin_users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Password is correct, create session
                $_SESSION['admin_id'] = $user['id'];
                $_SESSION['admin_username'] = $user['username'];
                
                // Update last login time
                $update_stmt = $conn->prepare("UPDATE admin_users SET last_login = NOW() WHERE id = ?");
                $update_stmt->bind_param("i", $user['id']);
                $update_stmt->execute();
                $update_stmt->close();
                
                // Redirect to admin dashboard
                header('Location: index.php');
                exit;
            } else {
                $error = "Invalid username or password";
            }
        } else {
            $error = "Invalid username or password";
        }
        
        $stmt->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Nyuro Strategies</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts - SF Pro Display -->
    <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet">
    
    <style>
        :root {
            --primary: #1E3A8A;
            --primary-light: #3B82F6;
            --dark: #0F172A;
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #F8FAFC;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .login-card {
            max-width: 400px;
            width: 100%;
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        
        .logo {
            margin-bottom: 1.5rem;
            text-align: center;
            font-weight: 700;
            font-size: 1.5rem;
            background: linear-gradient(to right, var(--primary-light), #0EA5E9);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .btn-primary {
            background: linear-gradient(to right, var(--primary), var(--primary-light));
            border: none;
            padding: 0.75rem;
        }
        
        .btn-primary:hover {
            background: linear-gradient(to right, #1a3479, #3071e8);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="login-card">
                    <div class="logo">Nyuro Strategies</div>
                    <h4 class="text-center mb-4">Admin Login</h4>
                    
                    <?php if (!empty($error)): ?>
                        <div class="alert alert-danger" role="alert">
                            <i class="fas fa-exclamation-circle me-2"></i> <?php echo $error; ?>
                        </div>
                    <?php endif; ?>
                    
                    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username" value="<?php echo $username; ?>" required>
                        </div>
                        
                        <div class="mb-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                    
                    <div class="text-center mt-4">
                        <a href="../index.php" class="text-muted text-decoration-none">
                            <i class="fas fa-arrow-left me-1"></i> Back to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
