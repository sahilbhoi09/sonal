// ...

function throwFlowers() {
  const flowerTypes = ['🌸', '🌹', '🌺', '🌷', '🍃'];
  const garden = document.getElementById("flower-garden");

  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.className = "falling-flower";
    flower.innerText = type;
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-50px";
    flower.style.fontSize = 1 + Math.random() * 1.5 + "rem";
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
  }
}

// ...

function toggleSparkle() {
  const body = document.body;
  const container = document.getElementById("stars-container");
  if (!body.classList.contains("sparkle-mode")) {
    body.classList.add("sparkle-mode");
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "moving-star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = 30 + Math.random() * 30 + 's';
      container.appendChild(star);
    }
    const moon = document.createElement("div");
    moon.className = "night-moon";
    container.appendChild(moon);
  } else {
    body.classList.remove("sparkle-mode");
    container.innerHTML = '';
  }
}

// ...

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    const container = document.getElementById('stars-container');
    const rand = Math.random();
    if (rand < 0.7) { // 70% chance for flower
      const flower = document.createElement('div');
      const flowerTypes = ['🌸', '🌹', '🌺', '🌷', '🍃'];
      flower.className = 'falling-flower';
      flower.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      flower.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
      flower.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
      flower.style.fontSize = 1.5 + Math.random() * 1 + 'rem';
      container.appendChild(flower);
      flower.addEventListener('animationend', () => flower.remove(), { once: true });
    } else if (rand < 0.9) { // 20% chance for shooting star
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
      shootingStar.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
      shootingStar.style.animationDuration = '5s';
      container.appendChild(shootingStar);
      shootingStar.addEventListener('animationend', () => shootingStar.remove(), { once: true });
    } else { // 10% chance for comet
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.left = (e.clientX / window.innerWidth * 100) + 'vw';
      comet.style.top = (e.clientY / window.innerHeight * 100) + 'vh';
      comet.style.animationDuration = '8s';
      container.appendChild(comet);
      comet.addEventListener('animationend', () => comet.remove(), { once: true });
    }
  }
}, { passive: true });

function changeBackgroundColor(type) {
  const body = document.body;
  if (type === 'gradient') {
    body.style.background = 'linear-gradient(45deg, #ffe0ec, #ffd6e8, #ffccd7)';
  } else if (type === 'galaxy') {
    body.style.background = 'url(https://via.placeholder.com/1920x1080.png?text=Galaxy+Background) no-repeat center center fixed';
    body.style.backgroundSize = 'cover';
  } else if (type === 'multicolor') {
    body.style.background = 'linear-gradient(to bottom, #ff69b4, #ffe68b, #87ceeb)';
  }
  body.classList.remove('sparkle-mode');
}
