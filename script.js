document.addEventListener("DOMContentLoaded", function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const login_event = document.querySelectorAll('.login_event');
    const overlay = document.getElementById('login_form');

    login_event.forEach(login_event => {
        login_event.addEventListener('click', function () {
            overlay.style.display = 'flex'; // Show the overlay
        });

    });


    const back = document.getElementById('login_back');

    back.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

});