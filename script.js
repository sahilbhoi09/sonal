/* Background and layout */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: url('https://images.unsplash.com/photo-1529257414771-b134a4f024d1?auto=format&fit=crop&w=1920&q=80') no-repeat center center fixed;
  background-size: cover;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
}

.container {
  text-align: center;
  position: relative;
  padding: 40px;
}

/* Heading style */
h1 {
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  animation: fadeIn 1.2s ease-out;
}

h1 span {
  color: #ffdede;
}

/* Buttons */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;
  color: #444;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background: #ffe4f0;
}

.main-btn {
  font-size: 1.3rem;
  background: #ff5a8b;
  color: white;
  padding: 14px 30px;
  font-weight: bold;
  border: 2px solid white;
}

/* Effects container */
#effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
}

/* Animations */
@keyframes floatImage {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.effect {
  position: absolute;
  pointer-events: none;
  z-index: 1000;
}

/* Individual effect animations */
.effect.flower {
  animation: drop 3.5s ease-out forwards;
}

.effect.sparkle {
  animation: sparkleFade 2s ease-out forwards;
}

.effect.firework {
  animation: explode 2.5s ease-out forwards;
}

@keyframes drop {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sparkleFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

@keyframes explode {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
