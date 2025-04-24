window.addEventListener('load', function() {
    document.querySelector('.loader').classList.add('hidden');
    
    document.body.classList.add('loaded');
    
    setTimeout(function() {
        document.querySelector('.loader').remove();
    }, 300);
});