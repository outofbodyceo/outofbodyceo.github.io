// Out of Body - Main JavaScript

// Background images
const images = [
  'images/bed-bug-treatment-toronto.webp',
  'images/bedbug-removal-service-toronto.jpg',
  'images/toronto-bed-bug-extermination.jpg',
  'images/toronto-pest-control-bed-bugs.jpg'
];

// Taglines for hero
const taglines = [
  'Undercover Bedbug Specialist',
  'Emotionally Attuned Pest Control'
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeBackgrounds();
  initializeTaglineToggle();
});

// Set up cycling backgrounds for each section
function initializeBackgrounds() {
  // Section 1 - starts with image 0
  cycleBg('bg1', 0, 8000);
  
  // Section 2 - starts with image 1 (staggered)
  cycleBg('bg2', 1, 9000);
  
  // Section 3 - starts with image 2
  cycleBg('bg3', 2, 7500);
  
  // Section 4 - starts with image 3
  cycleBg('bg4', 3, 8500);
  
  // Section 5 - starts with image 0
  cycleBg('bg5', 0, 9500);
}

// Cycle background for a specific element
function cycleBg(elementId, startIndex, interval) {
  const element = document.getElementById(elementId);
  let currentIndex = startIndex;
  
  // Set initial image
  element.style.backgroundImage = `url('${images[currentIndex]}')`;
  element.style.opacity = '1';
  
  // Cycle through images
  setInterval(() => {
    // Fade out
    element.style.transition = 'opacity 2s ease-in-out';
    element.style.opacity = '0';
    
    // Change image and fade in
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      element.style.backgroundImage = `url('${images[currentIndex]}')`;
      element.style.opacity = '1';
    }, 2000);
  }, interval);
}

// Toggle tagline in hero
function initializeTaglineToggle() {
  const taglineElement = document.getElementById('tagline');
  let currentTaglineIndex = 0;
  
  setInterval(() => {
    taglineElement.style.transition = 'opacity 1s ease-in-out';
    taglineElement.style.opacity = '0';
    
    setTimeout(() => {
      currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
      taglineElement.textContent = taglines[currentTaglineIndex];
      taglineElement.style.opacity = '1';
    }, 1000);
  }, 5000);
}

// Preload all images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});
