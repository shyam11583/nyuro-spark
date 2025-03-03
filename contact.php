
<?php 
include 'includes/header.php';

$name = $email = $message = "";
$nameErr = $emailErr = $messageErr = "";
$success = false;

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = clean_input($_POST["name"]);
    }
    
    // Validate email
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = clean_input($_POST["email"]);
        // Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
    
    // Validate message
    if (empty($_POST["message"])) {
        $messageErr = "Message is required";
    } else {
        $message = clean_input($_POST["message"]);
    }
    
    // If no errors, save to database
    if (empty($nameErr) && empty($emailErr) && empty($messageErr)) {
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);
        
        if ($stmt->execute()) {
            $success = true;
            $name = $email = $message = ""; // Clear form fields
        } else {
            $errorMessage = "Error: " . $stmt->error;
        }
        
        $stmt->close();
    }
}
?>

<!-- Page Header -->
<section class="bg-dark-blue text-white py-5 mt-5">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <h1 class="display-4 fw-bold mb-3">Contact Us</h1>
                <p class="lead mb-0">Reach out to learn more about our AI trading solutions</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="section-padding">
    <div class="container">
        <div class="row">
            <!-- Contact Information -->
            <div class="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                <div class="pe-lg-5">
                    <h2 class="mb-4">Get in Touch</h2>
                    <p class="text-muted mb-5">Have questions about our AI trading solutions? Our team is here to help you navigate the future of algorithmic trading.</p>
                    
                    <div class="d-flex align-items-center mb-4">
                        <div class="bg-primary-light rounded-circle p-3 me-3">
                            <i class="fas fa-map-marker-alt text-white"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Our Location</h5>
                            <p class="text-muted mb-0">123 Finance Street, New York, NY 10001</p>
                        </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-4">
                        <div class="bg-primary-light rounded-circle p-3 me-3">
                            <i class="fas fa-envelope text-white"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Email Address</h5>
                            <p class="text-muted mb-0">info@nyurostrategies.com</p>
                        </div>
                    </div>
                    
                    <div class="d-flex align-items-center">
                        <div class="bg-primary-light rounded-circle p-3 me-3">
                            <i class="fas fa-phone text-white"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Phone Number</h5>
                            <p class="text-muted mb-0">+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                <div class="card border-0 shadow-sm rounded-lg">
                    <div class="card-body p-4 p-lg-5">
                        <?php if ($success): ?>
                            <div class="alert alert-success">
                                <i class="fas fa-check-circle me-2"></i> Your message has been sent successfully! We'll get back to you soon.
                            </div>
                        <?php endif; ?>
                        
                        <h3 class="mb-4">Send us a Message</h3>
                        
                        <form id="contactForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control <?php echo (!empty($nameErr)) ? 'is-invalid' : ''; ?>" id="name" name="name" value="<?php echo $name; ?>">
                                <?php if (!empty($nameErr)): ?>
                                    <div class="invalid-feedback"><?php echo $nameErr; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control <?php echo (!empty($emailErr)) ? 'is-invalid' : ''; ?>" id="email" name="email" value="<?php echo $email; ?>">
                                <?php if (!empty($emailErr)): ?>
                                    <div class="invalid-feedback"><?php echo $emailErr; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="mb-4">
                                <label for="message" class="form-label">Your Message</label>
                                <textarea class="form-control <?php echo (!empty($messageErr)) ? 'is-invalid' : ''; ?>" id="message" name="message" rows="5"><?php echo $message; ?></textarea>
                                <?php if (!empty($messageErr)): ?>
                                    <div class="invalid-feedback"><?php echo $messageErr; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Map Section -->
<section class="section-padding pt-0">
    <div class="container">
        <div class="rounded-lg overflow-hidden shadow-sm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215026761931!2d-73.98784122402035!3d40.75288657138385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c3fa!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1693229061606!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
