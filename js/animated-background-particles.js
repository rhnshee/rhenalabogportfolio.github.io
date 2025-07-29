// Animated Bckground Particles
document.addEventListener('DOMContentLoaded', function() {
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['rgba(0,191,255,0.5)', 'rgba(30,144,255,0.5)', 'rgba(255,255,255,0.3)'];

class Particle {
    constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    
    draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,191,255,${1 - distance/100})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        }
    }
    }
    
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
});