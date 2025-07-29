// this script for parallax effects
document.addEventListener('DOMContentLoaded', function() {
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach(shape => {
        const depth = parseFloat(shape.getAttribute('data-depth'));
        const xMove = x * 50 * depth;
        const yMove = y * 50 * depth;
        
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
});