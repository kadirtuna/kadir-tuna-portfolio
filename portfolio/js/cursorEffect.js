const heroSection = document.querySelector('.hero-section');
const cursorEffect = document.querySelector('.cursor-effect');

// Update the position of the circular effect element on mousemove
heroSection.addEventListener('mousemove', function(e) {
  const rect = heroSection.getBoundingClientRect();
  const posX = e.clientX - rect.left;
  const posY = e.clientY - rect.top;
  cursorEffect.style.left = posX + 'px';
  cursorEffect.style.top = posY + 'px';
});

// Change the cursor effect on click
heroSection.addEventListener('click', function() {
  cursorEffect.classList.add('concentrated');
  setTimeout(() => {
    cursorEffect.classList.remove('concentrated');
  }, 300); // Duration of the concentrated effect
});