const claroButton = document.getElementById('claro');
const escuroButton = document.getElementById('escuro');
const body = document.body;
const recentUpdatesContainer = document.querySelector('.recent-updates');

claroButton.addEventListener('click', () => {
    body.classList.remove('dark-mode-variables');
    body.classList.add('light');
    recentUpdatesContainer.classList.remove('dark-mode-variables');
    recentUpdatesContainer.classList.add('light');
});

escuroButton.addEventListener('click', () => {
    body.classList.remove('light');
    body.classList.add('dark-mode-variables');
    recentUpdatesContainer.classList.remove('light');
    recentUpdatesContainer.classList.add('dark-mode-variables');
});