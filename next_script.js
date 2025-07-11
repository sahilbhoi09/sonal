function goBack() {
  window.location.href = "index.html";
}

// Mood-based content
function setMood(mood) {
  const content = document.getElementById('mood-content');
  content.classList.remove('active');
  setTimeout(() => {
    let html = '';
    if (mood === 1 || mood === 2) { // Very Sad or Sad
      html = `
        <div class="sad-options">
          <div>Fav Song: Imagine - John Lennon</div>
          <div>Fav Food: Warm Chocolate Cake</div>
          <div>Fav Line: "This too shall pass."</div>
          <div>Fav Memory: A quiet evening by the sea</div>
          <div>Message: You're not alone, take your time.</div>
        </div>
      `;
      if (mood === 2) html += '<div>Things will get better soon!</div>';
    } else if (mood === 3) { // Neutral
      html = `
        <div class="game-options">
          <a href="#" onclick="playGame('bubble-shooter')">Bubble Shooter</a>
          <a href="#" onclick="playGame('memory-match')">Memory Match</a>
          <a href="https://poki.com/en/g/subway-surfers" target="_blank">Subway Surfers</a>
          <a href="https://poki.com/en/g/temple-run-2" target="_blank">Temple Run 2</a>
        </div>
      `;
    } else if (mood === 4) { // Happy
      html = '<div>Great to see you happy! Enjoy a little firework! <button onclick="startFirework()">Launch</button></div>';
    } else if (mood === 5) { // Very Happy
      html = '<div>Wow, so joyful! 🎉 <div class="confetti"></div><button onclick="startFirework()">Celebrate!</button></div>';
    }
    content.innerHTML = html;
    content.classList.add('active');
  }, 100);
}

// Built-in games (simple placeholders)
function playGame(game) {
  alert(`Playing ${game}! (This is a demo—implement your game logic here!)`);
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
