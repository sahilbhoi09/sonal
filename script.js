function goToNextPage() {
  window.location.href = "next.html"; // you can change it later
}

function throwFlowers() {
  for (let i = 0; i < 25; i++) {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.className = "effect";
    flower.style.position = "absolute";
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.fontSize = `${1 + Math.random() * 2}rem`;
    flower.style.animation = `drop ${3 + Math.random() * 2}s ease-out forwards`;

    document.getElementById("effects").appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
  }
}

function addSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.innerText = "✨";
    sparkle.className = "effect";
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.fontSize = `${1 + Math.random()}rem`;
    sparkle.style.animation = "sparkleFade 2s ease-out forwards";

    document.getElementById("effects").appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}

function launchFireworks() {
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.innerText = "🎆";
    firework.className = "effect";
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.fontSize = `${2 + Math.random() * 2}rem`;
    firework.style.animation = "explode 2.5s ease-out forwards";

    document.getElementById("effects").appendChild(firework);
    setTimeout(() => firework.remove(), 2500);
  }
}
