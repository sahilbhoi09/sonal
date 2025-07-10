function goToNextPage() {
  window.location.href = "next.html";
}

// Floating icons (guitar & momo)
const icons = ['🎸', '🥟'];
for (let i = 0; i < 80; i++) {
  const el = document.createElement('div');
  el.classList.add('floating-item');
  el.innerText = icons[Math.floor(Math.random() * icons.length)];
  el.style.top = Math.random() * 100 + 'vh';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 1 + Math.random() * 1.5 + 'rem';
  el.style.animationDuration = 20 + Math.random() * 20 + 's';
  document.getElementById('floating-icons').appendChild(el);
}

// Flower garden
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

// Sparkle (Dark mode + stars)
function toggleSparkle() {
  const body = document.body;
  const starsContainer = document.getElementById("stars-container");
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      starsContainer.appendChild(star);
    }
  } else {
    body.classList.remove("sparkle-mode");
    starsContainer.innerHTML = '';
  }
}

// Firework launcher
function startFirework() {
  const rocket = document.getElementById("rocket");
  rocket.classList.remove("launch");
  void rocket.offsetWidth; // restart animation
  rocket.classList.add("launch");
}
