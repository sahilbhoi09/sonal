body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(45deg, #ffe0ec, #ffd6e8, #ffccd7);
  overflow-x: hidden;
  min-height: 100vh;
  transition: background 1s ease;
  position: relative;
}

body.sparkle-mode {
  background: url('https://via.placeholder.com/1920x1080.png?text=Galaxy+Background') no-repeat center center fixed;
  background-size: cover;
}

.container {
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.name {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: #ff69b4;
  text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4);
}

.buttons {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

button {
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 14px;
  background: white;
  color: #444;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background: #ffe8f0;
}

#flower-garden {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 3;
}

.falling-flower {
  position: absolute;
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  animation: flowerFall 5s linear forwards;
  pointer-events: none;
  z-index: 5;
}

@keyframes flowerFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}

#stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.moving-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px #fff;
  animation: starMove 30s linear infinite;
}

@keyframes starMove {
  0% { transform: translate(0, 0); }
  50% { transform: translate(10vw, -10vh); }
  100% { transform: translate(20vw, 0); }
}

.night-moon {
  position: absolute;
  width: 100px;
  height: 100px;
  background: url('https://via.placeholder.com/100x100.png?text=Moon') no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  z-index: 2;
  top: 10vh;
  left: 10vw;
}

#fireworks-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  pointer-events: none;
}
