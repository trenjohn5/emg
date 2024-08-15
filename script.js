document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offsetTop = targetElement.offsetTop - 56; // Adjust for fixed header

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
