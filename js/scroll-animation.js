// Enhanced scroll animations
    document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('show');
            
            // Add additional effects based on data attributes
            if (element.hasAttribute('data-animate-type')) {
            const type = element.getAttribute('data-animate-type');
            
            if (type === 'fade-up') {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            } else if (type === 'scale-in') {
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
            }
            }
        }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    const sections = document.querySelectorAll('section');

    const checkSectionInView = function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
        section.classList.add('in-view');
        } else {
        section.classList.remove('in-view');
        }
    });
    };

    window.addEventListener('scroll', checkSectionInView);
    window.addEventListener('load', checkSectionInView);
    });