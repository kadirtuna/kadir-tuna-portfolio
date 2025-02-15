document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const text = typingText.textContent;
    
    function typeAnimation() {
        let displayText = '';
        let currentIndex = 0;
        
        function type() {
            if (currentIndex < text.length) {
                displayText += text[currentIndex];
                // Create a span for the cursor and position it after the text
                typingText.innerHTML = displayText + '<span class="cursor">|</span>';
                currentIndex++;
                setTimeout(type, 100); // Adjust typing speed here
            } else {
                setTimeout(erase, 2000); // Wait before starting to erase
            }
        }
        
        function erase() {
            if (displayText.length > 0) {
                displayText = displayText.slice(0, -1);
                // Keep the cursor at the end while erasing
                typingText.innerHTML = displayText + '<span class="cursor">|</span>';
                setTimeout(erase, 50); // Adjust erasing speed here
            } else {
                setTimeout(() => {
                    currentIndex = 0;
                    type(); // Restart typing
                }, 1000); // Wait before restarting
            }
        }
        
        type(); // Start the animation
    }
    
    typeAnimation(); // Initialize the animation
}); 