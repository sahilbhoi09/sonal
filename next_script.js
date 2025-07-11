function goBack() {
  const content = document.getElementById('comfort-content');
  const gallery = document.getElementById('image-gallery');
  const backBtn = document.getElementById('back-button');
  content.innerHTML = '';
  gallery.innerHTML = '';
  gallery.style.display = 'none';
  backBtn.innerHTML = '';
  backBtn.classList.remove('active');
  setMood(1); // Return to five-button menu
}

// Set sad mood
function setMood(mood) {
  const moodButtons = document.querySelectorAll('.mood-buttons button');
  moodButtons.forEach(btn => {
    if (btn !== event.target) {
      btn.style.animation = 'fadeOut 0.6s forwards';
      setTimeout(() => btn.style.display = 'none', 600);
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
      setTimeout(() => option.style.animation = 'fadeInSlide 0.6s forwards', index * 150);
    });
    createHearts();
  }, 700);
}

// Handle option clicks
function handleOption(option) {
  const content = document.getElementById('comfort-content');
  const backBtn = document.getElementById('back-button');
  content.innerHTML = '';
  backBtn.innerHTML = '<button class="back-btn" onclick="goBack()">Back to Menu</button>';
  backBtn.classList.add('active');

  if (option === 1) { // Wanna listen to song??
    const songs = [
      'https://www.youtube.com/watch?v=502xhwUiGTs&list=RD502xhwUiGTs&start_radio=1', // Imagine - John Lennon
      'https://www.youtube.com/watch?v=9JDSGhhiOwI&list=RDGMEMPipJmhsMq3GHGrfqf4WIqA&start_radio=1&rv=502xhwUiGTs',  // Someone Like You - Adele
      'https://www.youtube.com/watch?v=0KozfDYK1EU&list=RD0KozfDYK1EU&start_radio=1'   // Placeholder (e.g., Never Gonna Give You Up)
    ];
    let html = '<div class="sad-options">';
    songs.forEach(song => {
      html += `<div class="sad-option"><a href="${song}" target="_blank">Play Song</a></div>`;
    });
    html += `<div class="sad-option"><a href="https://www.youtube.com/" target="_blank">Others</a></div>`;
    html += '</div>';
    content.innerHTML = html;
  } else if (option === 2) { // Missing someone
    let html = '<div class="sad-options">';
    html += '<div class="sub-option" onclick="handleSubOption(2, \'S\')">S</div>';
    html += '<div class="sub-option" onclick="handleSubOption(2, \'M\')">M</div>';
    html += '</div>';
    content.innerHTML = html;
  } else if (option === 3) { // Wanted love?
    content.innerHTML = '<div class="sad-option">8435149722 and 9770126819, you find love here!!!</div>';
  } else if (option === 4) { // Lets see some beauties
    const gallery = document.getElementById('image-gallery');
    const backBtn = document.getElementById('back-button');
    content.style.display = 'none';
    gallery.style.display = 'flex';
    backBtn.classList.add('active');
    // To see pictures, upload them to a web-accessible location (e.g., imgur.com or your own server)
    // Replace the URLs below with the actual image links
    const images = [
      'https://i.imgur.com/placeholder1.jpg', // Replace with image URL 1
      'https://i.imgur.com/placeholder2.jpg', // Replace with image URL 2
      'https://i.imgur.com/placeholder3.jpg', // Replace with image URL 3
      'https://i.imgur.com/placeholder4.jpg', // Replace with image URL 4
      'https://i.imgur.com/placeholder5.jpg', // Replace with image URL 5
      'https://i.imgur.com/placeholder6.jpg'  // Replace with image URL 6
    ];
    images.forEach((img, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-image';
      div.style.backgroundImage = `url(${img})`;
      gallery.appendChild(div);
      setTimeout(() => div.style.animation = 'zoomIn 0.6s forwards', index * 150);
    });
  } else if (option === 5) { // Confess your feeling?
    content.innerHTML = '<div class="sad-option"><textarea placeholder="Pour your heart here..." rows="5" cols="40" style="font-family: \'Dancing Script\', cursive;"></textarea><button onclick="submitConfession()">Release</button></div>';
  }
}

// Handle sub-options for Missing someone
function handleSubOption(option, sub) {
  const content = document.getElementById('comfort-content');
  const backBtn = document.getElementById('back-button');
  content.innerHTML = '';
  backBtn.innerHTML = '<button class="back-btn" onclick="goBack()">Back to Menu</button>';
  backBtn.classList.add('active');
  if (option === 2) {
    if (sub === 'S') {
      content.innerHTML = '<div class="sad-option" style="font-family: \'Dancing Script\', cursive;">Call Sahil, your light awaits...</div>';
    } else if (sub === 'M') {
      content.innerHTML = '<div class="sad-option" style="font-family: \'Dancing Script\', cursive;">Remember your memories in your lock folder, a treasure within...</div>';
    }
  }
}

// Submit confession
function submitConfession() {
  alert('Your heart’s whispers are safe with the stars. Share with someone when ready.');
}

// Floating hearts animation
function createHearts() {
  const heartFloat = document.getElementById('heart-float');
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 8 + Math.random() * 4 + 's';
    heartFloat.appendChild(heart);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createHearts();
});

// Resize handling
window.addEventListener('resize', () => {
  const canvas = document.getElementById('fireworks-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
