document.addEventListener('DOMContentLoaded', function() {
    // Project data - you can expand this with your actual project data
    const projects = {
        'Hotel Management System': {
            date: 'May 2024',
            description: 'A comprehensive hotel management system with room booking, staff management, and reporting features.',
            tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
            images: ['images/hotel-system-screenshot.png'],
            liveLink: 'https://core3.paradisehoteltomasmorato.com/',
            codeLink: '#'
        },
        'E-commerce Platform': {
            date: 'March 2024',
            description: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            images: ['images/ecommerce-mockup.png'],
            liveLink: '#',
            codeLink: '#'
        },
        'Creative Portfolio': {
            date: 'January 2024',
            description: 'A visually stunning portfolio website with smooth animations and interactive elements.',
            tech: ['GSAP', 'SCSS', 'Figma', 'Three.js'],
            images: ['images/portfolio-mockup.png'],
            liveLink: '#',
            codeLink: '#'
        }
        // Add more projects as needed
    };

    // Make project cards clickable
    const projectCards = document.querySelectorAll('.project-3d-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on a button inside the card
            if (e.target.closest('.btn-3d')) return;
            
            const projectTitle = this.querySelector('h3').textContent;
            const projectData = projects[projectTitle] || {
                date: 'Current',
                description: 'Detailed information about this project is coming soon.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                images: [this.querySelector('img').src],
                liveLink: '#',
                codeLink: '#'
            };
            
            openProjectModal(projectTitle, projectData);
        });
    });

    // Close modal when clicking the close button
    document.querySelector('.modal-close-btn').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside content
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
});

function openProjectModal(title, projectData) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalCodeLink = document.getElementById('modalCodeLink');
    const thumbnailsContainer = document.querySelector('.modal-thumbnails');
    
    // Set modal content
    modalTitle.textContent = title;
    modalDate.textContent = projectData.date;
    modalImage.src = projectData.images[0];
    modalDescription.textContent = projectData.description;
    modalLiveLink.href = projectData.liveLink;
    modalCodeLink.href = projectData.codeLink;
    
    // Set tech stack
    modalTech.innerHTML = '';
    projectData.tech.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.textContent = tech;
        modalTech.appendChild(techSpan);
    });
    
    // Set thumbnails
    thumbnailsContainer.innerHTML = '';
    projectData.images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imgSrc;
        thumbnail.className = 'thumbnail-item' + (index === 0 ? ' active' : '');
        thumbnail.addEventListener('click', () => {
            modalImage.src = imgSrc;
            document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Show modal
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
}

// Add this to your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    let currentSlide = 0;
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Navigation handlers
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        } else if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    });
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
});