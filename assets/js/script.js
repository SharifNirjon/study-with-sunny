document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times (X)
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Enrollment Form Validation ---
    const enrollForm = document.getElementById('enrollmentForm');

    if (enrollForm) {
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const course = document.getElementById('course').value;

            if (!firstName || !lastName || !email || !phone || !course) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!validatePhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Simulate Form Submission
            alert(`Thank you, ${firstName}! Your application for ${course === 'olevel' ? 'O-Level' : 'A-Level'} has been received. We will contact you at ${email} shortly.`);
            enrollForm.reset();
        });
    }

    // --- Email Validation Helper ---
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // --- Phone Validation Helper (Simple) ---
    function validatePhone(phone) {
        const re = /^[0-9+\-\s()]{10,15}$/; 
        return re.test(phone);
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Header Scroll Effect (Optional: Add shadow on scroll) ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

});
