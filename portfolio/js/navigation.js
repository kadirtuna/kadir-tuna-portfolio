// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

// Add click event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if navbar is expanded (visible on mobile)
    if (navbarCollapse.classList.contains('show')) {
      // Trigger the navbar toggler click to close the menu
      navbarToggler.click();
    }
  });
});

// Add click event listener to document
document.addEventListener('click', (event) => {
  // Check if navbar is expanded and click is outside the navbar
  if (navbarCollapse.classList.contains('show') && 
      !navbarCollapse.contains(event.target) && 
      !navbarToggler.contains(event.target)) {
    // Trigger the navbar toggler click to close the menu
    navbarToggler.click();
  }
});