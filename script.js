function goToNextPage() {
  window.location.href = "next.html";
}

// Floating icons
const icons = ['🎸', '🥟'];
for (let i = 0; i < 80; i++) {
  const el = document.createElement('div');
  el.classList.add('floating-item');
  el.innerText = icons[Math.floor(Math.random() * icons.length)];
  el.style.top = Math.random() * 100 + 'vh';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 1 + Math.random() * 1.2 + 'rem';
  el.style.animationDuration = 20 + Math.random() * 20 + 's';
  document.getElementById('floating-icons').appendChild(el);
}

// Flower shower
function throwFlowers() {
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.className = "falling-flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    document.body.appendChild(flower);

    // Add to garden when finished
    setTimeout(() => {
      flower.remove();
      const garden = document.getElementById("flower-garden");
      const planted = document.createElement("div");
      planted.innerText = "🌸";
      planted.style.margin = "2px";
      garden.appendChild(planted);
    }, 4000);
  }
}

// Sparkle mode
function toggleSparkle() {
  const body = document.body;
  const container = document.getElementById("stars-container");
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "falling-star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      container.appendChild(star);
    }
  } else {
    body.classList.remove("sparkle-mode");
    container.innerHTML = '';
  }
}

// Firework burst animation
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function startFirework() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const colors = ['red', 'orange', 'yellow', 'white', 'blue', 'cyan'];

  for (let i = 0; i < 50; i++) {
    fireworks.push({
      x: x,
      y: y,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * -6 - 2,
      radius: 2 + Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }
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
