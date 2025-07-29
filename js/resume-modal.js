//Resume Modal
    function openResume() {
        document.getElementById('resumeModal').style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    function closeResume() {
        document.getElementById('resumeModal').style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    // Optional: close on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
        closeResume();
        }
    });

    // Optional: close on outside click
    window.onclick = function(event) {
        const modal = document.getElementById('resumeModal');
        if (event.target === modal) {
        closeResume();
        }
    }