document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuPanel = document.getElementById('mobile-menu');
    const mobileNavItems = document.querySelectorAll('#mobile-menu .mobile-nav-item');

    if (mobileMenuButton && mobileMenuPanel) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenuPanel.classList.toggle('open');
        });

        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenuPanel.classList.remove('open');
            });
        });
    }

    // Optional: Scroll animation observer
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
});
