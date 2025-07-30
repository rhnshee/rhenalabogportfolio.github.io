// Get both toggle elements
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

// Function to set dark mode
function setDarkMode(isDark) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    
    // Sync both toggles
    darkModeToggle.checked = isDark;
    darkModeToggleMobile.checked = isDark;
}

// Check for saved user preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    setDarkMode(true);
}

// Desktop toggle event listener
darkModeToggle.addEventListener('change', (e) => {
    setDarkMode(e.target.checked);
});

// Mobile toggle event listener
darkModeToggleMobile.addEventListener('change', (e) => {
    setDarkMode(e.target.checked);
});

// Optional: Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    setDarkMode(newColorScheme === 'dark');
});