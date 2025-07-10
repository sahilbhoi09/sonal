// Performance optimization - requestAnimationFrame for all animations
const optimizedRAF = window.requestAnimationFrame || 
                    window.webkitRequestAnimationFrame || 
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) { return setTimeout(callback, 1000/60); };

// Error handling wrapper
function safeExecute(fn) {
  return function(...args) {
    try {
      return fn.apply(this, args);
    } catch (error) {
      console.error('Error in Cosmic Garden:', error);
      return null;
    }
  };
}

// Original functions with optimizations
function goToNextPage() {
  window.location.href = "next.html";
}

// Floating icons with performance optimization
const floatingIconsContainer = document.getElementById('floating-icons');
const icons = ['🎸', '🥟', '🌸'];
const floatingItems = [];

for (let i = 0; i < 80; i++) {
  const el = document.createElement('div');
  el.classList.add('floating-item');
  el.innerText = icons[Math.floor(Math.random() * icons.length)];
  el.style.top = Math.random() * 100 + 'vh';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 1 + Math.random() * 1.2 + 'rem';
  el.style.animationDuration = 20 + Math.random() * 20 + 's';
  if (el.innerText === '🌸') el.style.animation = 'rotate 4s linear infinite';
  floatingIconsContainer.appendChild(el);
  floatingItems.push(el);
}

// Optimized flower rain
const flowerTypes = ['🌸', '🌹', '🌺', '🌷', '🍃'];
const garden = document.getElementById("flower-garden");

const throwFlowers = safeExecute(function() {
  garden.innerHTML = '';
  const flowers = [];

  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.className = "falling-flower";
    flower.innerText = type;
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    if (type === '🍃') flower.className += " falling-petal";
    document.body.appendChild(flower);

    flower.addEventListener('animationend', () => {
      flower.remove();
      if (type !== '🍃') {
        const planted = document.createElement("div");
        planted.innerText = type;
        planted.style.margin = "2px";
        garden.appendChild(planted);
      }
    }, { once: true });
    
    flowers.push(flower);
  }
  return flowers;
});

// Sparkle mode with optimizations
const toggleSparkle = safeExecute(function() {
  const body = document.body;
  const container = document.getElementById("stars-container");
  
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    
    // Create stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "moving-star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = 30 + Math.random() * 30 + 's';
      container.appendChild(star);
      stars.push(star);
    }
    
    // Create moon
    const moon = document.createElement("div");
    moon.className = "night-moon";
    moon.style.top = "10vh";
    moon.style.left = "10vw";
    container.appendChild(moon);
    
    // Create shooting star
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = Math.random() * 50 + "vh";
    shootingStar.style.left = "90vw";
    shootingStar.style.animationDuration = "5s";
    container.appendChild(shootingStar);
    
    // Create comet
    const comet = document.createElement("div");
    comet.className = "comet";
    comet.style.top = Math.random() * 30 + "vh";
    comet.style.left = "80vw";
    comet.style.animationDuration = "8s";
    container.appendChild(comet);
    
    // Create constellations
    const constellations = [];
    const constellation1 = document.createElement("div");
    constellation1.className = "constellation";
    constellation1.innerHTML = `
      <div class="constellation-star" style="top: 20vh; left: 20vw;"></div>
      <div class="constellation-star" style="top: 25vh; left: 25vw;"></div>
      <div class="constellation-star" style="top: 30vh; left: 30vw;"></div>
      <div class="constellation-star" style="top: 35vh; left: 35vw;"></div>
      <div class="constellation-star" style="top: 40vh; left: 40vw;"></div>
      <div class="constellation-star" style="top: 45vh; left: 45vw;"></div>
      <div class="constellation-star" style="top: 50vh; left: 50vw;"></div>
    `;
    container.appendChild(constellation1);
    constellations.push(constellation1);
    
    const constellation2 = document.createElement("div");
    constellation2.className = "constellation";
    constellation2.innerHTML = `
      <div class="constellation-star" style="top: 60vh; left: 30vw;"></div>
      <div class="constellation-star" style="top: 65vh; left: 35vw;"></div>
      <div class="constellation-star" style="top: 70vh; left: 30vw;"></div>
      <div class="constellation-star" style="top: 70vh; left: 40vw;"></div>
      <div class="constellation-star" style="top: 75vh; left: 35vw;"></div>
    `;
    container.appendChild(constellation2);
    constellations.push(constellation2);
    
    return { stars, moon, shootingStar, comet, constellations };
  } else {
    body.classList.remove("sparkle-mode");
    container.innerHTML = '';
    return null;
  }
});

// Fireworks with performance optimizations
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let fireworkColor = 'white';

function startFirework() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const colors = ['red', 'orange', 'yellow', 'white', 'blue', 'cyan'];

  let firework = {
    x: x,
    y: y,
    speedY: -10,
    accelY: 0.2,
    life: 50
  };

  function launch() {
    if (firework.life > 0) {
      firework.y += firework.speedY;
      firework.speedY += firework.accelY;
      firework.life--;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(firework.x, firework.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      optimizedRAF(launch);
    } else {
      for (let i = 0; i < 100; i++) {
        fireworks.push({
          x: firework.x,
          y: firework.y,
          speedX: Math.random() * 6 - 3,
          speedY: Math.random() * -6 - 2,
          radius: 2 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 100
        });
      }
    }
  }
  launch();
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((p, index) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.speedY += 0.05;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) fireworks.splice(index, 1);
  });
  optimizedRAF(animateFireworks);
}
animateFireworks();

// Handle resize with debounce
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, 200);
});

// Click handlers with optimizations
document.addEventListener('click', (e) => {
  const container = document.getElementById('stars-container');
  const rand = Math.random();
  
  if (rand < 0.7) {
    const flower = document.createElement('div');
    const flowerTypes = ['🌸', '🌹', '🌺', '🌷', '🍃'];
    flower.className = 'falling-flower';
    flower.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
    flower.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
    flower.style.fontSize = 1.5 + Math.random() * 1 + 'rem';
    if (flower.innerText === '🍃') flower.className += ' falling-petal';
    container.appendChild(flower);
    flower.addEventListener('animationend', () => flower.remove(), { once: true });
  } else if (rand < 0.9) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
    shootingStar.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
    shootingStar.style.animationDuration = '5s';
    container.appendChild(shootingStar);
    shootingStar.addEventListener('animationend', () => shootingStar.remove(), { once: true });
  } else {
    const comet = document.createElement('div');
    comet.className = 'comet';
    comet.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
    comet.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
    comet.style.animationDuration = '8s';
    container.appendChild(comet);
    comet.addEventListener('animationend', () => comet.remove(), { once: true });
  }
}, { passive: true });

// Sky color functions
function setSkyColor(gradient) {
  document.body.classList.add('sparkle-mode');
  document.body.style.background = gradient + ', url(\'https://via.placeholder.com/1920x1080.png?text=Milky+Way+Background\')';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
}

function updateFireworkColor(color) {
  fireworkColor = color;
}

function launchCustomFirework(e) {
  const x = e.clientX;
  const y = canvas.height;
  const colors = [fireworkColor];

  let firework = {
    x: x,
    y: y,
    speedY: -10,
    accelY: 0.2,
    life: 50
  };

  function launch() {
    if (firework.life > 0) {
      firework.y += firework.speedY;
      firework.speedY += firework.accelY;
      firework.life--;
      ctx.beginPath();
      ctx.arc(firework.x, firework.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      optimizedRAF(launch);
    } else {
      for (let i = 0; i < 100; i++) {
        fireworks.push({
          x: firework.x,
          y: firework.y,
          speedX: Math.random() * 6 - 3,
          speedY: Math.random() * -6 - 2,
          radius: 2 + Math.random() * 2,
          color: colors[0],
          life: 100
        });
      }
    }
  }
  launch();
}

function fireworkShow() {
  const intervals = [1000, 1500, 2000];
  intervals.forEach((interval, index) => {
    setTimeout(() => {
      const x = Math.random() * canvas.width;
      launchCustomFirework({ clientX: x });
    }, interval * (index + 1));
  });
}

// Initialize UI components
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('color-buttons').innerHTML = `
    <button onclick="setSkyColor('linear-gradient(to bottom, #0a0a2a, #1a1a3a, #2a2a4a)')">Dark Blue</button>
    <button onclick="setSkyColor('linear-gradient(to bottom, #2a0033, #4b0062, #6b008b)')">Purple</button>
    <button onclick="setSkyColor('linear-gradient(to bottom, #000000, #1a1a1a, #333333)')">Black</button>
  `;
  
  document.getElementById('firework-show').innerHTML = '<button onclick="fireworkShow()">Firework Show</button>';
  
  document.getElementById('color-picker').innerHTML = `
    <select onchange="updateFireworkColor(this.value)">
      <option value="red">Red</option>
      <option value="orange">Orange</option>
      <option value="yellow">Yellow</option>
      <option value="white">White</option>
      <option value="blue">Blue</option>
      <option value="cyan">Cyan</option>
    </select>
  `;
});

// Performance monitoring
window.addEventListener('load', () => {
  console.log('Cosmic Garden fully loaded');
  if ('performance' in window) {
    const timing = performance.getEntriesByType('navigation')[0];
    console.log(`Load time: ${timing.loadEventEnd - timing.startTime}ms`);
  }
});
