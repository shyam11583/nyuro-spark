
// Main JavaScript file for Nyuro Strategies

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });
    
    // Navbar scroll behavior
    const mainNav = document.getElementById('mainNav');
    
    if (mainNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                mainNav.classList.add('navbar-scrolled');
            } else {
                mainNav.classList.remove('navbar-scrolled');
            }
        });
        
        // Trigger scroll event on page load to handle refresh on scrolled page
        window.dispatchEvent(new Event('scroll'));
    }
    
    // Activate current nav item
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.php')) {
            link.classList.add('active');
        }
    });
    
    // Custom fade-in animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Form validation for contact form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let valid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Reset previous error messages
        document.querySelectorAll('.is-invalid').forEach(el => {
            el.classList.remove('is-invalid');
        });
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('is-invalid');
            valid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            valid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('is-invalid');
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault();
        }
    });
}
