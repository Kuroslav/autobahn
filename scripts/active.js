const icons = document.querySelectorAll('.nav-icon');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icons.forEach(i => i.classList.remove('active'));
        icon.classList.add('active');
    });
});