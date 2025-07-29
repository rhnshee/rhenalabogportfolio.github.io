// Script for the tech carousel in tools and technologies section
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.compact-tech-carousel');
        const track = document.querySelector('.compact-tech-track');
        const cards = document.querySelectorAll('.compact-tech-card');
        const prevBtn = document.querySelector('.compact-carousel-btn.prev-btn');
        const nextBtn = document.querySelector('.compact-carousel-btn.next-btn');
        const dotsContainer = document.querySelector('.compact-carousel-dots');

        if (!carousel || !track || cards.length === 0) return;

        let cardWidth, visibleCards, dotCount, dots;
        let currentIndex = 0;

        function recalc() {
            // Use margin-left + width + margin-right for accurate width
            const style = getComputedStyle(cards[0]);
            const marginLeft = parseInt(style.marginLeft) || 0;
            const marginRight = parseInt(style.marginRight) || 0;
            cardWidth = marginLeft + cards[0].offsetWidth + marginRight;
            visibleCards = Math.max(1, Math.floor(carousel.offsetWidth / cardWidth));
            // Dots should match the number of unique scroll positions (so last card is always fully visible)
            dotCount = Math.max(1, cards.length - visibleCards + 1);
        }


        function goToSlide(slideIndex) {
            // Each dot now represents a unique scroll position (0 to maxIndex)
            const maxIndex = Math.max(0, cards.length - visibleCards);
            currentIndex = slideIndex;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            updateCarousel();
        }

        function createDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('compact-dot');
                // Active dot logic: dot is active if its index matches currentIndex
                if (i === currentIndex) dot.classList.add('active');
                dot.addEventListener('click', function() { goToSlide(i); });
                dotsContainer.appendChild(dot);
            }
            dots = dotsContainer.querySelectorAll('.compact-dot');
        }

        function updateCarousel() {
            // Calculate the max starting index so the last card is always visible
            const maxIndex = Math.max(0, cards.length - visibleCards);
            // Clamp currentIndex
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            // If there are fewer cards than visibleCards, don't scroll
            let offset = 0;
            if (cards.length > visibleCards) {
                // Calculate the actual width of the track and the carousel
                const trackRect = track.getBoundingClientRect();
                const carouselRect = carousel.getBoundingClientRect();
                // Clamp offset so the last card is always fully visible, even if track is wider than expected
                const maxOffset = Math.min(0, carouselRect.width - trackRect.width);
                offset = -currentIndex * cardWidth;
                if (offset < maxOffset) offset = maxOffset;
            }
            track.style.transform = `translateX(${offset}px)`;

            // Update active dot
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            // No disabling for infinite loop
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }

        function nextSlide() {
            const maxIndex = Math.max(0, cards.length - visibleCards);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            } else {
                // Loop to start
                currentIndex = 0;
                updateCarousel();
            }
        }

        function prevSlide() {
            const maxIndex = Math.max(0, cards.length - visibleCards);
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else {
                // Loop to end, always show last card fully
                currentIndex = maxIndex;
                updateCarousel();
            }
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });

        function handleResize() {
            recalc();
            createDots();
            // Clamp currentIndex to valid range
            const maxIndex = Math.max(0, cards.length - visibleCards);
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            updateCarousel();
        }

        // Initial setup
        recalc();
        createDots();
        updateCarousel();

        window.addEventListener('resize', handleResize);
    });