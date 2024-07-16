document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn.toggle-btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('btn-gradient-2','text-white');
            });

            this.classList.add('btn-gradient-2', 'text-white');
        });
    });

    // Initialize with the active class
    document.querySelector('.btn.toggle-btn.active').classList.add('btn-gradient-2', 'text-white');
});