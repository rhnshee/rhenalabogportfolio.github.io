//Lightbox for Certifications
    function openLightbox(imgSrc) {
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
        }