
<?php include 'includes/header.php'; ?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-right">
                <span class="badge bg-primary-light text-white mb-3">AI-Powered Trading Solutions</span>
                <h1 class="display-4 fw-bold text-white mb-4">Transform Your Trading with AI-Driven Strategies</h1>
                <p class="lead text-white-50 mb-5">Nyuro Strategies delivers cutting-edge AI solutions that analyze market trends, optimize trading strategies, and maximize your investment potential.</p>
                <div class="d-flex flex-column flex-sm-row gap-3">
                    <a href="services.php" class="btn btn-primary">Explore Our Services</a>
                    <a href="contact.php" class="btn btn-outline">Contact Us</a>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <img src="assets/images/hero-illustration.svg" alt="AI Trading Illustration" class="img-fluid">
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="section-padding bg-light" id="features">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
                <span class="badge bg-primary-light text-white mb-3">Our Features</span>
                <h2 class="h1 mb-4">Advanced Trading Solutions</h2>
                <p class="lead text-muted">Discover how our AI-powered technologies can transform your trading strategies and investment outcomes.</p>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-4 mb-4 mb-md-0" data-aos="fade-up">
                <div class="features-card">
                    <div class="features-icon">
                        <i class="fas fa-chart-line fa-2x"></i>
                    </div>
                    <h3>AI Trading Models</h3>
                    <p>Our proprietary AI algorithms analyze market patterns and execute trades with precision timing.</p>
                </div>
            </div>
            
            <div class="col-md-4 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                <div class="features-card">
                    <div class="features-icon">
                        <i class="fas fa-chart-bar fa-2x"></i>
                    </div>
                    <h3>Predictive Analytics</h3>
                    <p>Leverage the power of machine learning to predict market movements and optimize your trading strategy.</p>
                </div>
            </div>
            
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div class="features-card">
                    <div class="features-icon">
                        <i class="fas fa-layer-group fa-2x"></i>
                    </div>
                    <h3>Customized Solutions</h3>
                    <p>Tailored AI strategies designed specifically for your investment goals and risk profile.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="section-padding how-it-works">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
                <span class="badge bg-primary-light text-white mb-3">Our Process</span>
                <h2 class="h1 mb-4">How It Works</h2>
                <p class="lead text-muted">Our systematic approach ensures optimal results through sophisticated AI-driven analysis and execution.</p>
            </div>
        </div>
        
        <div class="row">
            <!-- Step 1 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0" data-aos="fade-up">
                <div class="step">
                    <div class="step-number">01</div>
                    <h3>Data Collection</h3>
                    <p>Our AI systems gather and process vast amounts of market data from multiple sources.</p>
                    <div class="connector"></div>
                </div>
            </div>
            
            <!-- Step 2 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div class="step">
                    <div class="step-number">02</div>
                    <h3>Pattern Recognition</h3>
                    <p>Advanced algorithms identify trends and patterns invisible to traditional analysis.</p>
                    <div class="connector"></div>
                </div>
            </div>
            
            <!-- Step 3 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="200">
                <div class="step">
                    <div class="step-number">03</div>
                    <h3>Strategy Development</h3>
                    <p>Custom trading strategies are developed based on your goals and risk tolerance.</p>
                    <div class="connector"></div>
                </div>
            </div>
            
            <!-- Step 4 -->
            <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="step">
                    <div class="step-number">04</div>
                    <h3>Execution & Optimization</h3>
                    <p>Strategies are executed with precision timing and continuously optimized.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-8" data-aos="fade-up">
                <h2 class="h1 text-white mb-4">Ready to Transform Your Trading Strategy with AI?</h2>
                <p class="text-white-50 mb-5">Join the leading financial institutions and traders who have already elevated their performance with Nyuro Strategies.</p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a href="services.php" class="btn btn-light">Explore Our Services</a>
                    <a href="contact.php" class="btn btn-outline-light">Schedule a Demo</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Recent Blog Posts -->
<section class="section-padding bg-light">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
                <span class="badge bg-primary-light text-white mb-3">Our Insights</span>
                <h2 class="h1 mb-4">Latest Articles</h2>
                <p class="lead text-muted">Stay updated with the latest trends and insights in AI-driven trading strategies.</p>
            </div>
        </div>
        
        <div class="row">
            <?php
            $recent_posts = get_recent_posts();
            
            if (empty($recent_posts)) {
                // If no posts are available, show placeholder content
                for ($i = 0; $i < 3; $i++) {
                    ?>
                    <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="<?php echo $i * 100; ?>">
                        <div class="card border-0 shadow-sm h-100">
                            <img src="assets/images/blog-placeholder-<?php echo $i + 1; ?>.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h5 class="card-title">Sample Article Title <?php echo $i + 1; ?></h5>
                                <p class="card-text text-muted">This is a placeholder for upcoming articles about AI trading strategies and market analysis.</p>
                                <a href="blog.php" class="btn btn-link text-primary p-0">Read More <i class="fas fa-arrow-right ms-1"></i></a>
                            </div>
                            <div class="card-footer bg-transparent border-0">
                                <small class="text-muted">Coming Soon</small>
                            </div>
                        </div>
                    </div>
                    <?php
                }
            } else {
                // Display actual blog posts
                foreach ($recent_posts as $index => $post) {
                    ?>
                    <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="<?php echo $index * 100; ?>">
                        <div class="card border-0 shadow-sm h-100">
                            <?php if ($post['image_url']): ?>
                                <img src="<?php echo htmlspecialchars($post['image_url']); ?>" class="card-img-top" alt="<?php echo htmlspecialchars($post['title']); ?>">
                            <?php else: ?>
                                <img src="assets/images/blog-placeholder-<?php echo $index + 1; ?>.jpg" class="card-img-top" alt="Blog Image">
                            <?php endif; ?>
                            
                            <div class="card-body">
                                <h5 class="card-title"><?php echo htmlspecialchars($post['title']); ?></h5>
                                <p class="card-text text-muted"><?php echo htmlspecialchars($post['excerpt']); ?>...</p>
                                <a href="blog.php?id=<?php echo $post['id']; ?>" class="btn btn-link text-primary p-0">Read More <i class="fas fa-arrow-right ms-1"></i></a>
                            </div>
                            <div class="card-footer bg-transparent border-0">
                                <small class="text-muted">
                                    <i class="far fa-calendar-alt me-1"></i> <?php echo date('M d, Y', strtotime($post['created_at'])); ?> | 
                                    <i class="far fa-user me-1"></i> <?php echo htmlspecialchars($post['author']); ?>
                                </small>
                            </div>
                        </div>
                    </div>
                    <?php
                }
            }
            ?>
        </div>
        
        <div class="text-center mt-4">
            <a href="blog.php" class="btn btn-outline-primary">View All Articles</a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
