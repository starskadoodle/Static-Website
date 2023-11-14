function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.button').forEach(button => button.classList.toggle('dark-mode', isDarkMode));
    localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
}

function checkDarkModePreference() {
    const savedPreference = localStorage.getItem('dark-mode') === 'true';
    [document.body, ...document.querySelectorAll('.button')].forEach(element => element.classList.toggle('dark-mode', savedPreference));
}

document.addEventListener('DOMContentLoaded', checkDarkModePreference);

const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);