function goToNextPage() {
  window.location.href = "next.html";
}

// Floating icons (guitar & momo)
const icons = ['🎸', '🥟'];
for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.classList.add('floating-item');
  el.innerText = icons[Math.floor(Math.random() * icons.length)];
  el.style.top = Math.random() * 100 + 'vh';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 1 + Math.random() * 1.5 + 'rem';
  el.style.animationDuration = 20 + Math.random() * 30 + 's';
  document.getElementById('floating-icons').appendChild(el);
}

// 🌸 Flower Garden Effect
function throwFlowers() {
  const garden = document.getElementById("flower-garden");
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.style.fontSize = `${1 + Math.random()}rem`;
    flower.style.margin = "2px";
    garden.appendChild(flower);
  }
}

// ✨ Star Twinkle Mode
function toggleSparkle() {
  const body = document.body;
  const stars = document.getElementsByClassName("star");

  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");

    // Add stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(star);
    }
  } else {
    body.classList.remove("sparkle-mode");
    while (stars.length > 0) stars[0].remove();
  }
}

// 🎆 Fireworks Canvas
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function launchFireworks() {
  for (let i = 0; i < 5; i++) {
    let x = Math.random() * canvas.width;
    let y = canvas.height;
    let color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    for (let j = 0; j < 50; j++) {
      particles.push({
        x: x,
        y: y,
        radius: 2 + Math.random() * 2,
        color: color,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * -5 - 2,
        life: 100
      });
    }
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.speedY += 0.05;
    p.life -= 1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });
  requestAnimationFrame(animateFireworks);
}
animateFireworks();
