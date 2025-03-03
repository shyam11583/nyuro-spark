
<?php
session_start();
require_once '../includes/db-connect.php';

// Check if user is logged in
if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit;
}

// Get admin info
$admin_id = $_SESSION['admin_id'];
$stmt = $conn->prepare("SELECT username, last_login FROM admin_users WHERE id = ?");
$stmt->bind_param("i", $admin_id);
$stmt->execute();
$admin = $stmt->get_result()->fetch_assoc();
$stmt->close();

// Get counts for dashboard
$blog_count = $conn->query("SELECT COUNT(*) as count FROM blog_posts")->fetch_assoc()['count'];
$message_count = $conn->query("SELECT COUNT(*) as count FROM contact_messages")->fetch_assoc()['count'];
$unread_count = $conn->query("SELECT COUNT(*) as count FROM contact_messages WHERE is_read = 0")->fetch_assoc()['count'];

// Get recent messages
$recent_messages = $conn->query("SELECT id, name, email, created_at, is_read FROM contact_messages ORDER BY created_at DESC LIMIT 5")->fetch_all(MYSQLI_ASSOC);

// Get recent blog posts
$recent_posts = $conn->query("SELECT id, title, created_at FROM blog_posts ORDER BY created_at DESC LIMIT 5")->fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Nyuro Strategies</title>
    
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
            --secondary: #172554;
            --accent: #0EA5E9;
            --dark: #0F172A;
            --light: #F8FAFC;
            --gray: #64748B;
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: var(--light);
            min-height: 100vh;
        }
        
        .admin-sidebar {
            background-color: var(--dark);
            min-height: 100vh;
            position: fixed;
            width: 250px;
            z-index: 1;
        }
        
        .admin-content {
            margin-left: 250px;
            padding: 20px;
        }
        
        .logo {
            font-weight: 700;
            font-size: 1.5rem;
            padding: 1.5rem;
            background: linear-gradient(to right, var(--primary-light), var(--accent));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .nav-link {
            color: rgba(255, 255, 255, 0.7);
            padding: 0.8rem 1.5rem;
            border-left: 4px solid transparent;
            transition: all 0.3s ease;
        }
        
        .nav-link:hover,
        .nav-link.active {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.05);
            border-left-color: var(--primary-light);
        }
        
        .nav-link i {
            width: 24px;
        }
        
        .stat-card {
            border-radius: 10px;
            border: none;
            transition: all 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }
        
        table.dataTable thead th {
            font-weight: 600;
            color: var(--gray);
        }
        
        .badge-unread {
            position: relative;
            top: -8px;
            left: -5px;
            font-size: 0.6rem;
        }
        
        /* Responsive Sidebar */
        @media (max-width: 991.98px) {
            .admin-sidebar {
                width: 70px;
                overflow: hidden;
            }
            
            .admin-sidebar .logo,
            .admin-sidebar .nav-text {
                display: none;
            }
            
            .admin-sidebar .nav-link {
                text-align: center;
                padding: 1rem;
            }
            
            .admin-content {
                margin-left: 70px;
            }
        }
    </style>
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="admin-sidebar">
            <div class="logo">Nyuro Strategies</div>
            <div class="nav flex-column">
                <a href="index.php" class="nav-link active">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    <span class="nav-text">Dashboard</span>
                </a>
                <a href="manage-blogs.php" class="nav-link">
                    <i class="fas fa-newspaper me-2"></i>
                    <span class="nav-text">Blog Posts</span>
                </a>
                <a href="view-messages.php" class="nav-link">
                    <i class="fas fa-envelope me-2"></i>
                    <span class="nav-text">Messages</span>
                    <?php if ($unread_count > 0): ?>
                        <span class="badge rounded-pill bg-danger badge-unread"><?php echo $unread_count; ?></span>
                    <?php endif; ?>
                </a>
                <a href="logout.php" class="nav-link mt-5">
                    <i class="fas fa-sign-out-alt me-2"></i>
                    <span class="nav-text">Logout</span>
                </a>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="admin-content">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Admin Dashboard</h2>
                <div class="text-muted">
                    Welcome, <strong><?php echo htmlspecialchars($admin['username']); ?></strong> | 
                    <small>Last login: <?php echo date('M d, Y H:i', strtotime($admin['last_login'])); ?></small>
                </div>
            </div>
            
            <!-- Stats Cards -->
            <div class="row mb-4">
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card stat-card">
                        <div class="card-body d-flex align-items-center">
                            <div class="stat-icon bg-primary-light text-white me-3">
                                <i class="fas fa-newspaper fa-lg"></i>
                            </div>
                            <div>
                                <h2 class="mb-0"><?php echo $blog_count; ?></h2>
                                <p class="text-muted mb-0">Total Blog Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card stat-card">
                        <div class="card-body d-flex align-items-center">
                            <div class="stat-icon bg-success text-white me-3">
                                <i class="fas fa-envelope fa-lg"></i>
                            </div>
                            <div>
                                <h2 class="mb-0"><?php echo $message_count; ?></h2>
                                <p class="text-muted mb-0">Total Messages</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="card stat-card">
                        <div class="card-body d-flex align-items-center">
                            <div class="stat-icon bg-warning text-white me-3">
                                <i class="fas fa-envelope-open fa-lg"></i>
                            </div>
                            <div>
                                <h2 class="mb-0"><?php echo $unread_count; ?></h2>
                                <p class="text-muted mb-0">Unread Messages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <!-- Recent Messages -->
                <div class="col-lg-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Recent Messages</h5>
                            <a href="view-messages.php" class="btn btn-sm btn-primary">View All</a>
                        </div>
                        <div class="card-body">
                            <?php if (empty($recent_messages)): ?>
                                <p class="text-muted text-center py-4">No messages yet.</p>
                            <?php else: ?>
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($recent_messages as $message): ?>
                                                <tr>
                                                    <td><?php echo htmlspecialchars($message['name']); ?></td>
                                                    <td><?php echo htmlspecialchars($message['email']); ?></td>
                                                    <td><?php echo date('M d, Y', strtotime($message['created_at'])); ?></td>
                                                    <td>
                                                        <?php if ($message['is_read']): ?>
                                                            <span class="badge bg-success">Read</span>
                                                        <?php else: ?>
                                                            <span class="badge bg-danger">Unread</span>
                                                        <?php endif; ?>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                
                <!-- Recent Blog Posts -->
                <div class="col-lg-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Recent Blog Posts</h5>
                            <a href="manage-blogs.php" class="btn btn-sm btn-primary">View All</a>
                        </div>
                        <div class="card-body">
                            <?php if (empty($recent_posts)): ?>
                                <p class="text-muted text-center py-4">No blog posts yet.</p>
                            <?php else: ?>
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Title</th>
                                                <th>Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($recent_posts as $post): ?>
                                                <tr>
                                                    <td><?php echo htmlspecialchars($post['title']); ?></td>
                                                    <td><?php echo date('M d, Y', strtotime($post['created_at'])); ?></td>
                                                    <td>
                                                        <a href="edit-blog.php?id=<?php echo $post['id']; ?>" class="btn btn-sm btn-outline-primary">
                                                            <i class="fas fa-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Quick Actions</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <a href="create-blog.php" class="btn btn-outline-primary w-100 py-3">
                                        <i class="fas fa-plus-circle me-2"></i> New Blog Post
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <a href="view-messages.php?filter=unread" class="btn btn-outline-danger w-100 py-3">
                                        <i class="fas fa-envelope me-2"></i> View Unread Messages
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <a href="../index.php" target="_blank" class="btn btn-outline-secondary w-100 py-3">
                                        <i class="fas fa-globe me-2"></i> View Website
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <a href="backup.php" class="btn btn-outline-info w-100 py-3">
                                        <i class="fas fa-database me-2"></i> Backup Database
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
