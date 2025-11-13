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

// Set up cycling backgrounds - faster timing (2-3 seconds)
function initializeBackgrounds() {
  // Each section with staggered timing between 2-3 seconds
  setupCrossfade('bg1', 0, 2000);
  setupCrossfade('bg2', 1, 2300);
  setupCrossfade('bg3', 2, 2700);
  setupCrossfade('bg4', 3, 2100);
  setupCrossfade('bg5', 0, 2500);
  setupCrossfade('bg6', 1, 2200);
}

// Setup crossfade - NO BLACK SCREENS, faster transitions
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
    transition: opacity 1.5s ease-in-out;
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
      
    }, 1500); // Wait for 1.5s fade to complete
    
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
