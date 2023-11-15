const DARK_MODE_CLASS = 'dark-mode';
const DARK_MODE_KEY = 'dark-mode';

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle(DARK_MODE_CLASS);
    document.querySelectorAll('.button').forEach(button => button.classList.toggle(DARK_MODE_CLASS, isDarkMode));
    localStorage.setItem(DARK_MODE_KEY, String(isDarkMode));
}

function checkDarkModePreference() {
    const savedPreference = localStorage.getItem(DARK_MODE_KEY) === 'true';
    [document.body, ...document.querySelectorAll('.button')].forEach(element => element.classList.toggle(DARK_MODE_CLASS, savedPreference));
}

document.addEventListener('DOMContentLoaded', checkDarkModePreference);

const darkModeToggleButton = document.getElementById('darkModeToggle');
if (darkModeToggleButton) darkModeToggleButton.addEventListener('click', toggleDarkMode);
