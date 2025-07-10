// script.js - Optimized
document.addEventListener('DOMContentLoaded', () => {
  // Initialize floating icons
  const icons = ['🌸', '✨', '🎵'];
  const container = document.getElementById('floating-icons');
  
  for (let i = 0; i < 50; i++) {
    const icon = document.createElement('div');
    icon.className = 'floating-item';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = `${Math.random() * 100}vw`;
    icon.style.top = `${Math.random() * 100}vh`;
    icon.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    icon.style.animationDuration = `${15 + Math.random() * 20}s`;
    container.appendChild(icon);
  }
});

function goToNextPage() {
  window.location.href = "next.html";
}

function throwFlowers() {
  // Optimized flower throwing function
  const flowerTypes = ['🌸', '🌹', '🌺'];
  const garden = document.getElementById("flower-garden");
  
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.className = "falling-flower";
    flower.textContent = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${3 + Math.random() * 4}s`;
    document.body.appendChild(flower);
    
    flower.addEventListener('animationend', () => flower.remove(), { once: true });
  }
}

// Other functions (toggleSparkle, startFirework) remain similar but optimized
