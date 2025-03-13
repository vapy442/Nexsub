// Add interactivity here if needed
// Example: Toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
toggleButton.classList.add('toggle-button');
document.querySelector('.navbar .container').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});