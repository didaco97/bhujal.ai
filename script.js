const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Function to show the alert
    function showAlert() {
        alert("Welcome to our prototype website developed for SIH. Please note that we are currently working on the backend and training a large language model (LLM) with groundwater data.");
    }

    // Show the alert after 5 seconds
    setTimeout(showAlert, 5000);
});
