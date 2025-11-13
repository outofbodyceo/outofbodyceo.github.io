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

// Set up cycling backgrounds - calm fade, but more frequent
function initializeBackgrounds() {
  // Cycle every 4-5 seconds with 2.5 second smooth fade
  setupCrossfade('bg1', 0, 4000);
  setupCrossfade('bg2', 1, 4300);
  setupCrossfade('bg3', 2, 4700);
  setupCrossfade('bg4', 3, 4100);
  setupCrossfade('bg5', 0, 4500);
  setupCrossfade('bg6', 1, 4200);
}

// Setup crossfade - CALM smooth fade, NO BLACK
function setupCrossfade(elementId, startIndex, interval) {
  const container = document.getElementById(elementId);
  let currentIndex = startIndex;
  let nextIndex = (startIndex + 1) % images.length;
  
  // Create two layers
  const layer1 = document.createElement('div');
  const layer2 = document.createElement('div');
  
  const layerStyle = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 2.5s ease-in-out;
  `;
  
  layer1.style.cssText = layerStyle;
  layer2.style.cssText = layerStyle;
  
  // Initialize immediately
  layer1.style.backgroundImage = `url('${images[currentIndex]}')`;
  layer1.style.opacity = '1';
  layer1.style.zIndex = '2';
  
  layer2.style.backgroundImage = `url('${images[nextIndex]}')`;
  layer2.style.opacity = '1';
  layer2.style.zIndex = '1';
  
  container.innerHTML = '';
  container.appendChild(layer2);
  container.appendChild(layer1);
  
  let topLayer = layer1;
  let bottomLayer = layer2;
  
  // Cycle with calm fade
  setInterval(() => {
    // Start calm fade out
    topLayer.style.opacity = '0';
    
    // After fade completes, swap layers
    setTimeout(() => {
      // Swap z-index
      if (topLayer === layer1) {
        layer1.style.zIndex = '1';
        layer2.style.zIndex = '2';
        topLayer = layer2;
        bottomLayer = layer1;
      } else {
        layer2.style.zIndex = '1';
        layer1.style.zIndex = '2';
        topLayer = layer1;
        bottomLayer = layer2;
      }
      
      // Load next image into bottom layer
      nextIndex = (nextIndex + 1) % images.length;
      bottomLayer.style.backgroundImage = `url('${images[nextIndex]}')`;
      bottomLayer.style.opacity = '1';
      
      // Reset top layer for next fade
      topLayer.style.opacity = '1';
      
    }, 2500); // Wait for 2.5s calm fade
    
  }, interval);
}

// Toggle tagline - INSTANT snap, no fade
function initializeTaglineToggle() {
  const taglineElement = document.getElementById('tagline');
  let currentTaglineIndex = 0;
  
  // Start toggling immediately
  setInterval(() => {
    // Instant snap to next tagline
    currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
    taglineElement.textContent = taglines[currentTaglineIndex];
  }, 2500); // Toggle every 2.5 seconds
}

// Preload all images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});
