function goBack() {
  const content = document.getElementById('comfort-content');
  const gallery = document.getElementById('image-gallery');
  const backBtn = document.getElementById('back-button');
  content.innerHTML = '';
  gallery.innerHTML = '';
  gallery.style.display = 'none';
  backBtn.classList.remove('active');
  document.querySelectorAll('.mood-buttons button').forEach(btn => btn.style.display = 'inline-block');
  document.getElementById('petal-rain').innerHTML = '';
  createPetals();
  window.location.href = "index.html";
}

// Set sad mood
function setMood(mood) {
  const moodButtons = document.querySelectorAll('.mood-buttons button');
  moodButtons.forEach(btn => {
    if (btn !== event.target) {
      btn.style.animation = 'fadeOut 0.5s forwards';
      setTimeout(() => btn.style.display = 'none', 500);
    }
  });
  event.target.style.animation = 'none';

  setTimeout(() => {
    const content = document.getElementById('comfort-content');
    content.classList.add('active');
    const options = [
      'Wanna listen to song??',
      'Missing someone',
      'Wanted love?',
      'Lets see some beauties',
      'Confess your feeling?'
    ];
    let html = '<div class="sad-options">';
    options.forEach((option, index) => {
      html += `<div class="sad-option" onclick="handleOption(${index + 1})">${option}</div>`;
    });
    html += '</div>';
    content.innerHTML = html;

    const sadOptions = document.querySelectorAll('.sad-option');
    sadOptions.forEach((option, index) => {
      setTimeout(() => option.style.animation = 'fadeInSlide 0.5s forwards', index * 100);
    });
  }, 600);
}

// Handle option clicks
function handleOption(option) {
  const content = document.getElementById('comfort-content');
  content.innerHTML = '';
  if (option === 1) { // Wanna listen to song??
    const songs = [
      'https://www.youtube.com/watch?v=XLlO1v6e2rQ', // Imagine - John Lennon
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder (e.g., Never Gonna Give You Up)
      'https://www.youtube.com/watch?v=YQHsXMglC9A'  // Someone Like You - Adele
    ];
    let html = '<div class="sad-options">';
    songs.forEach(song => {
      html += `<div class="comfort-option"><a href="${song}" target="_blank">Play Song</a></div>`;
    });
    html += `<div class="comfort-option"><a href="https://www.youtube.com/" target="_blank">Others</a></div>`;
    html += '</div>';
    content.innerHTML = html;
  } else if (option === 2) { // Missing someone
    let html = '<div class="sad-options">';
    html += '<div class="sad-option" onclick="handleSubOption(2, \'S\')">S</div>';
    html += '<div class="sad-option" onclick="handleSubOption(2, \'M\')">M</div>';
    html += '</div>';
    content.innerHTML = html;
  } else if (option === 3) { // Wanted love?
    content.innerHTML = '<div class="comfort-option">8435149722 and 9770126819, you find love here!!!</div>';
  } else if (option === 4) { // Lets see some beauties
    const gallery = document.getElementById('image-gallery');
    const backBtn = document.getElementById('back-button');
    content.style.display = 'none';
    gallery.style.display = 'flex';
    backBtn.classList.add('active');
    const images = [
      'https://via.placeholder.com/200x200.png?text=Beauty1',
      'https://via.placeholder.com/200x200.png?text=Beauty2',
      'https://via.placeholder.com/200x200.png?text=Beauty3',
      'https://via.placeholder.com/200x200.png?text=Beauty4',
      'https://via.placeholder.com/200x200.png?text=Beauty5',
      'https://via.placeholder.com/200x200.png?text=Beauty6'
    ];
    images.forEach((img, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-image';
      div.style.backgroundImage = `url(${img})`;
      gallery.appendChild(div);
      setTimeout(() => div.style.animation = 'zoomIn 0.5s forwards', index * 100);
    });
  } else if (option === 5) { // Confess your feeling?
    content.innerHTML = '<div class="comfort-option"><textarea placeholder="Write your feelings here..." rows="4" cols="30"></textarea><button onclick="submitConfession()">Submit</button></div>';
  }
}

// Handle sub-options for Missing someone
function handleSubOption(option, sub) {
  const content = document.getElementById('comfort-content');
  if (option === 2) {
    if (sub === 'S') {
      content.innerHTML = '<div class="comfort-option">Call Sahil</div>';
    } else if (sub === 'M') {
      content.innerHTML = '<div class="comfort-option">Remember you have your memories in your lock folder</div>';
    }
  }
}

// Submit confession (basic placeholder)
function submitConfession() {
  alert('Your feelings have been noted! Feel free to share with someone you trust.');
}

// Petal rain animation
function createPetals() {
  const petalRain = document.getElementById('petal-rain');
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.className = 'falling-petal';
    petal.innerText = '🍃';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = 5 + Math.random() * 5 + 's';
    petalRain.appendChild(petal);
  }
}

document.addEventListener('DOMContentLoaded', createPetals);

// Firework from bottom to top burst (optional, can be removed if not needed)
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
