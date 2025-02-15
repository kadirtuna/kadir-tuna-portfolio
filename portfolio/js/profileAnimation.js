document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.heading-trigger');
  const profilePhoto = document.querySelector('.hero-profile-photo');
  
  heading.addEventListener('mouseenter', () => {
    profilePhoto.style.transform = 'scale(2)';
  });
  
  heading.addEventListener('mouseleave', () => {
    profilePhoto.style.transform = 'scale(1)';
  });
  
  // Keep the existing hover effect on the photo itself
  profilePhoto.addEventListener('mouseenter', () => {
    profilePhoto.style.transform = 'scale(2)';
  });
  
  profilePhoto.addEventListener('mouseleave', () => {
    profilePhoto.style.transform = 'scale(1)';
  });
}); 