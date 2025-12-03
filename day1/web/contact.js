document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const successAlert = document.getElementById('successAlert');
    const form = this;
    
    // Show success message
    successAlert.style.display = 'block';
    
    // Scroll to success message
    successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
        form.reset();
        successAlert.style.display = 'none';
    }, 3000);
});

// Add animation to form inputs on focus
document.querySelectorAll('.form-control, .form-select').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});