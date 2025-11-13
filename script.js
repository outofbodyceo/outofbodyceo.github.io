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
  // Each section with staggered timing - added bg6 for new section
  setupCrossfade('bg1', 0, 7000);
  setupCrossfade('bg2', 1, 7500);
  setupCrossfade('bg3', 2, 8000);
  setupCrossfade('bg4', 3, 7200);
  setupCrossfade('bg5', 0, 7800);
  setupCrossfade('bg6', 1, 7400);
}

// Setup crossfade - NO BLACK SCREENS
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
    transition: opacity 3s ease-in-out;
  `;
  
  layer1.style.cssText = layerStyle;
  layer2.style.cssText = layerStyle;
  
  // Initialize - layer1 visible, layer2 preloaded underneath
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
  
  // Cycle - fade top layer out to reveal bottom layer
  setInterval(() => {
    // Fade out top layer
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
      
      // Load next image into bottom layer and make it visible
      nextIndex = (nextIndex + 1) % images.length;
      bottomLayer.style.backgroundImage = `url('${images[nextIndex]}')`;
      bottomLayer.style.opacity = '1';
      
      // Reset top layer opacity for next fade
      topLayer.style.opacity = '1';
      
    }, 3000); // Wait for fade to complete
    
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
