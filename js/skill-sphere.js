// this script for 3D skill sphere
document.addEventListener('DOMContentLoaded', function() {
    const tags = [
        { name: "HTML", count: 20 },
        { name: "CSS", count: 20 },
        { name: "JavaScript", count: 18 },
        { name: "PHP", count: 15 },
        { name: "MySQL", count: 15 },
        { name: "Bootstrap", count: 16 },
        { name: "React", count: 12 },
        { name: "Node.js", count: 10 },
        { name: "Git", count: 14 },
        { name: "Figma", count: 12 }
    ];
    
    const sphere = document.getElementById('skill-sphere');
    
    tags.forEach((tag, i) => {
        const tagEl = document.createElement('div');
        tagEl.className = 'skill-tag';
        tagEl.textContent = tag.name;
        tagEl.style.fontSize = `${12 + tag.count/2}px`;
        
        // Position in 3D space
        const phi = Math.acos(-1 + (2 * i) / tags.length);
        const theta = Math.sqrt(tags.length * Math.PI) * phi;
        
        const x = 150 * Math.cos(theta) * Math.sin(phi);
        const y = 150 * Math.sin(theta) * Math.sin(phi);
        const z = 150 * Math.cos(phi);
        
        tagEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        sphere.appendChild(tagEl);
    });
});