function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('button[onclick^="filterGallery"]');
    
    buttons.forEach(btn => {
        btn.className = 'px-6 py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300 transform hover:scale-110 backdrop-blur-sm';
    });
    
    event.target.className = 'px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-800 transition duration-300 transform hover:scale-110 shadow-lg';
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease-out forwards';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});