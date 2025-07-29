// script to create interactive 3D effects in hero image
    document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-img-container');
    const pictureFrame = document.querySelector('.picture-3d-frame');
    const heroImg = document.querySelector('.hero-img');
    const highlight = document.querySelector('.picture-highlight');
    
    if (heroContainer) {
        heroContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX - heroContainer.getBoundingClientRect().left;
        const y = e.clientY - heroContainer.getBoundingClientRect().top;
        
        const centerX = heroContainer.offsetWidth / 2;
        const centerY = heroContainer.offsetHeight / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        pictureFrame.style.transform = `
            rotateX(${angleX}deg) 
            rotateY(${angleY}deg)
            translateZ(20px)
        `;
        
        // Parallax effect for the image
        const moveX = (x - centerX) / 15;
        const moveY = (y - centerY) / 15;
        
        heroImg.style.transform = `translateZ(60px) translateX(${moveX}px) translateY(${moveY}px)`;
        
        // Dynamic highlight position
        highlight.style.left = `${(x / heroContainer.offsetWidth) * 70 + 15}%`;
        highlight.style.top = `${(y / heroContainer.offsetHeight) * 70 + 15}%`;
        });
        
        heroContainer.addEventListener('mouseleave', () => {
        pictureFrame.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
        heroImg.style.transform = 'translateZ(60px)';
        highlight.style.left = '10%';
        highlight.style.top = '10%';
        });
    }
    });


    // script to create interactive 3D effects for hero image
    document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-img-container');
    const pictureFrame = document.querySelector('.picture-3d-frame');
    const heroImg = document.querySelector('.hero-img');
    const highlight = document.querySelector('.picture-highlight');
    
    if (heroContainer) {
        heroContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX - heroContainer.getBoundingClientRect().left;
        const y = e.clientY - heroContainer.getBoundingClientRect().top;
        
        const centerX = heroContainer.offsetWidth / 2;
        const centerY = heroContainer.offsetHeight / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        pictureFrame.style.transform = `
            rotateX(${angleX}deg) 
            rotateY(${angleY}deg)
            translateZ(20px)
        `;
        
        // Parallax effect for the image
        const moveX = (x - centerX) / 15;
        const moveY = (y - centerY) / 15;
        
        heroImg.style.transform = `translateZ(60px) translateX(${moveX}px) translateY(${moveY}px)`;
        
        // Dynamic highlight position
        highlight.style.left = `${(x / heroContainer.offsetWidth) * 70 + 15}%`;
        highlight.style.top = `${(y / heroContainer.offsetHeight) * 70 + 15}%`;
        });
        
        heroContainer.addEventListener('mouseleave', () => {
        pictureFrame.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
        heroImg.style.transform = 'translateZ(60px)';
        highlight.style.left = '10%';
        highlight.style.top = '10%';
        });
    }
    });

    // This script creates floating dots around the hero image for a dynamic effect
    function createFloatingDots() {
    const container = document.querySelector('.hero-img-container');
    if (!container) return;
    
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'picture-dots';
    container.appendChild(dotsContainer);
    
    for (let i = 0; i < 15; i++) {
        const dot = document.createElement('div');
        dot.className = 'picture-dot';
        
        // Random position around the picture
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 60;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        dot.style.left = `calc(50% + ${x}px)`;
        dot.style.top = `calc(50% + ${y}px)`;
        dot.style.animationDelay = `${Math.random() * 4}s`;
        dot.style.opacity = 0.3 + Math.random() * 0.7;
        dot.style.width = `${4 + Math.random() * 4}px`;
        dot.style.height = dot.style.width;
        
        dotsContainer.appendChild(dot);
    }
    }

    document.addEventListener('DOMContentLoaded', createFloatingDots);