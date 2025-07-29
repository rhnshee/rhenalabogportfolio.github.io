// Script to animate stats counting and timeline progress
    document.addEventListener('DOMContentLoaded', function() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const achievementsContainer = document.querySelector('.achievements-container');
        let statsAnimated = false;

        function animateStats() {
            if (statsAnimated) return;
            statsAnimated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const suffix = stat.textContent.includes('+') ? '+' : '';
                const duration = 2000;
                const startTime = performance.now();
                const animate = function(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentNumber = Math.floor(progress * target);
                    stat.textContent = currentNumber + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
            });
        }

        // Animate timeline progress
        const timelineProgress = document.querySelector('.timeline-progress');
        function animateTimeline() {
            const timelineEvents = document.querySelectorAll('.timeline-event');
            const totalEvents = timelineEvents.length;
            let currentProgress = 0;
            timelineEvents.forEach((event, index) => {
                setTimeout(() => {
                    currentProgress = ((index + 1) / totalEvents) * 100;
                    timelineProgress.style.width = `${currentProgress}%`;
                    event.classList.add('active');
                }, index * 500);
            });
        }

        // Helper to check if element is in viewport
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            );
        }

        // Intersection Observer to trigger animations when scrolled into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    animateTimeline();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); // was 0.5

        // Fallback for when the achievements container is already in view
        window.addEventListener('load', () => {
            setTimeout(fallbackTrigger, 1000); // slightly longer delay
        });


        function fallbackTrigger() {
            if (!statsAnimated && achievementsContainer && isInViewport(achievementsContainer)) {
                animateStats();
                animateTimeline();
            }
        }

        if (achievementsContainer) {
            observer.observe(achievementsContainer);
            // Fallback: if already in view on load (e.g. mobile), trigger after a longer delay
            setTimeout(fallbackTrigger, 900);
            window.addEventListener('load', () => setTimeout(fallbackTrigger, 900));
        }

        // Add hover effect to timeline events
        const timelineEvents = document.querySelectorAll('.timeline-event');
        timelineEvents.forEach(event => {
            event.addEventListener('mouseenter', function() {
                this.querySelector('.event-bubble').style.transform = 'translateY(-20px) translateZ(20px)';
            });
            event.addEventListener('mouseleave', function() {
                this.querySelector('.event-bubble').style.transform = 'translateY(0) translateZ(0)';
            });
        });
    });