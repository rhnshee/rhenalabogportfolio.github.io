// Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuPanel = document.getElementById('mobile-menu');
    const mobileNavItems = document.querySelectorAll('#mobile-menu .mobile-nav-item');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuPanel.classList.toggle('open');
    });

    // Close menu when a nav item is clicked
    mobileNavItems.forEach(function(item) {
        item.addEventListener('click', function() {
            mobileMenuPanel.classList.remove('open');
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(section => {
        observer.observe(section);
    });

    //Mobile Menu
     document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });

        // Optional: Close menu when a link is clicked
        const mobileNavItems = mobileMenu.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    });