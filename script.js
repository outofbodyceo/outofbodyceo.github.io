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

// Set up cycling backgrounds for each section with crossfade
function initializeBackgrounds() {
  // Create dual-layer backgrounds for smooth crossfade
  setupCrossfade('bg1', 0, 8000);
  setupCrossfade('bg2', 1, 9000);
  setupCrossfade('bg3', 2, 7500);
  setupCrossfade('bg4', 3, 8500);
  setupCrossfade('bg5', 0, 9500);
}

// Setup crossfade effect for smooth transitions
function setupCrossfade(elementId, startIndex, interval) {
  const container = document.getElementById(elementId);
  let currentIndex = startIndex;
  
  // Create two layers for crossfading
  const layer1 = document.createElement('div');
  const layer2 = document.createElement('div');
  
  layer1.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 3s ease-in-out;
  `;
  
  layer2.style.cssText = layer1.style.cssText;
  
  // Set initial images
  layer1.style.backgroundImage = `url('${images[currentIndex]}')`;
  layer1.style.opacity = '1';
  layer2.style.opacity = '0';
  
  container.innerHTML = '';
  container.appendChild(layer1);
  container.appendChild(layer2);
  
  let useLayer1 = true;
  
  // Cycle through images
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    
    if (useLayer1) {
      // Fade to layer2
      layer2.style.backgroundImage = `url('${images[currentIndex]}')`;
      layer2.style.opacity = '1';
      layer1.style.opacity = '0';
    } else {
      // Fade to layer1
      layer1.style.backgroundImage = `url('${images[currentIndex]}')`;
      layer1.style.opacity = '1';
      layer2.style.opacity = '0';
    }
    
    useLayer1 = !useLayer1;
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

// Preload all images for smooth transitions
images.forEach(src => {
  const img = new Image();
  img.src = src;
});
