// Out of Body - Main JavaScript

// Background images array
const backgroundImages = [
  'images/bed-bug-treatment-toronto.webp',
  'images/bedbug-removal-service-toronto.jpg',
  'images/toronto-bed-bug-extermination.jpg',
  'images/toronto-pest-control-bed-bugs.jpg'
];

// Tagline toggle texts
const taglines = [
  'EMOTIONALLY ATTUNED PEST CONTROL',
  'UNDERCOVER BED BUG EXPERTS'
];

let currentBgIndex = 0;
let currentTaglineIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeBackground();
  initializeTaglineToggle();
});

// Background cycling function
function initializeBackground() {
  const bgContainer = document.getElementById('backgroundContainer');
  
  // Set initial background
  bgContainer.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
  
  // Cycle through backgrounds every 8 seconds
  setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    
    // Fade out
    bgContainer.style.opacity = '0';
    
    // Change image after fade out
    setTimeout(() => {
      bgContainer.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
      // Fade in
      bgContainer.style.opacity = '1';
    }, 2000);
  }, 8000);
}

// Tagline toggle function
function initializeTaglineToggle() {
  const taglineElement = document.getElementById('tagline');
  
  // Start toggling after initial display (3 seconds after page load)
  setTimeout(() => {
    setInterval(() => {
      // Fade out current tagline
      taglineElement.style.opacity = '0';
      
      // Change text after fade out
      setTimeout(() => {
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        taglineElement.textContent = taglines[currentTaglineIndex];
        
        // Fade in new tagline
        taglineElement.style.opacity = '1';
      }, 800);
    }, 5000); // Toggle every 5 seconds
  }, 3000); // Start after 3 seconds
}

// Preload all background images for smooth transitions
function preloadImages() {
  backgroundImages.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
  });
}

// Call preload on page load
preloadImages();
