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

// Flower rain from top
function throwFlowers() {
  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    flower.className = "falling-flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
      const garden = document.getElementById("flower-garden");
      const planted = document.createElement("div");
      planted.innerText = "🌸";
      planted.style.margin = "2px";
      garden.appendChild(planted);
    }, 5000);
  }
}

// Sparkle mode with night background and stars
function toggleSparkle() {
  const body = document.body;
  const container = document.getElementById("stars-container");
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "falling-star";
      star.style.top = Math.random() * 50 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      container.appendChild(star);
    }
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
