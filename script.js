function goToNextPage() {
  window.location.href = "next.html";
}

// Floating icons with rotation
const icons = ['🎸', '🥟', '🌸'];
for (let i = 0; i < 80; i++) {
  const el = document.createElement('div');
  el.classList.add('floating-item');
  el.innerText = icons[Math.floor(Math.random() * icons.length)];
  el.style.top = Math.random() * 100 + 'vh';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 1 + Math.random() * 1.2 + 'rem';
  el.style.animationDuration = 20 + Math.random() * 20 + 's';
  if (el.innerText === '🌸') el.style.animation = 'rotate 4s linear infinite';
  document.getElementById('floating-icons').appendChild(el);
}

// Flower rain from top with variety
function throwFlowers() {
  const flowerTypes = ['🌸', '🌹', '🌺', '🌷', '🍃']; // Cherry blossom, rose, hibiscus, tulip, petal
  const garden = document.getElementById("flower-garden");
  garden.innerHTML = ''; // Clear garden to prevent accumulation

  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.className = "falling-flower";
    flower.innerText = type;
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    if (type === '🍃') flower.className += " falling-petal"; // Special class for petals
    document.body.appendChild(flower);

    // Remove flower after animation
    setTimeout(() => {
      flower.remove();
      if (type !== '🍃') { // Only add to garden if not a petal
        const planted = document.createElement("div");
        planted.innerText = type;
        planted.style.margin = "2px";
        garden.appendChild(planted);
      }
    }, 5000);
  }
}

// Sparkle mode with night background, stars, moon, shooting stars, comets, and constellations
function toggleSparkle() {
  const body = document.body;
  const container = document.getElementById("stars-container");
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    // Stars with movement
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "moving-star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = 30 + Math.random() * 30 + "s";
      container.appendChild(star);
    }
    // Moon
    const moon = document.createElement("div");
    moon.className = "night-moon";
    moon.style.top = "10vh";
    moon.style.left = "10vw";
    container.appendChild(moon);
    // Shooting Star
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = Math.random() * 50 + "vh";
    shootingStar.style.left = "90vw";
    shootingStar.style.animationDuration = "5s";
    container.appendChild(shootingStar);
    // Comet
    const comet = document.createElement("div");
    comet.className = "comet";
    comet.style.top = Math.random() * 30 + "vh";
    comet.style.left = "80vw";
    comet.style.animationDuration = "8s";
    container.appendChild(comet);
    // Constellation (e.g., Big Dipper)
    const constellation = document.createElement("div");
    constellation.className = "constellation";
    constellation.innerHTML = `
      <div class="constellation-star" style="top: 20vh; left: 20vw;"></div>
      <div class="constellation-star" style="top: 25vh; left: 25vw;"></div>
      <div class="constellation-star" style="top: 30vh; left: 30vw;"></div>
      <div class="constellation-star" style="top: 35vh; left: 35vw;"></div>
      <div class="constellation-star" style="top: 40vh; left: 40vw;"></div>
      <div class="constellation-star" style="top: 45vh; left: 45vw;"></div>
      <div class="constellation-star" style="top: 50vh; left: 50vw;"></div>
    `;
    container.appendChild(constellation);
    // Additional Constellation (e.g., Orion)
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
  } else {
    body.classList.remove("sparkle-mode");
    container.innerHTML = '';
  }
}

// Firework from bottom to top burst
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function startFirework() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const colors = ['red', 'orange', 'yellow', 'white', 'blue', 'cyan'];

  // Launch firework
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
      requestAnimationFrame(launch);
    } else {
      // Burst at top
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
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

// Handle resize for mobile compatibility
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
