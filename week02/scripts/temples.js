// Get references to elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const dropdowns = document.querySelectorAll('nav > ul > li');

// Toggle the menu visibility when the hamburger button is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu

    // Change the hamburger icon to 'X' when the menu is open
    if (navMenu.classList.contains('show')) {
        hamburger.innerHTML = 'X'; // Close icon
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
});

// Dropdown functionality
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        // Prevent the default link behavior for parent dropdown items
        if (dropdown.querySelector('.dropdown')) {
            e.preventDefault();
            dropdown.classList.toggle('active'); // Toggle the active state

            // Close other dropdowns
            dropdowns.forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove('active');
                }
            });
        }
    });
});

// Close dropdowns if clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('show'); // Hide the menu
        hamburger.innerHTML = '&#9776;'; // Reset to hamburger icon
        dropdowns.forEach(item => item.classList.remove('active')); // Close dropdowns
    }
});
