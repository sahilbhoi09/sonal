function goToNextPage() {
  // Replace with actual page when ready
  window.location.href = "next.html";
}

function throwFlowers() {
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.className = "effect flower";

    const randomX = Math.random() * 100;
    flower.style.left = `${randomX}vw`;
    flower.style.fontSize = `${1 + Math.random() * 2}rem`;
    flower.style.animationDuration = `${2 + Math.random() * 2}s`;

    document.getElementById("effects").appendChild(flower);

    setTimeout(() => flower.remove(), 4000);
  }
}

function addSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.innerText = "✨";
    sparkle.className = "effect sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = `${1 + Math.random()}rem`;

    document.getElementById("effects").appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
  }
}

function launchFireworks() {
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.innerText = "🎆";
    firework.className = "effect firework";

    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.fontSize = `${2 + Math.random() * 2}rem`;

    document.getElementById("effects").appendChild(firework);

    setTimeout(() => firework.remove(), 2500);
  }
}
