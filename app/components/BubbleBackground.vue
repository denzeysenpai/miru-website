<template>
  <div class="bubble-container">
    <div class="bubble bright"></div>
    <div class="bubble bright"></div>
    <div class="bubble dim"></div>
    <div class="bubble bright"></div>
    <div class="bubble dim"></div>
    <div class="bubble dim"></div>
    <div class="bubble dim"></div>
  </div>
</template>

<style scoped>
.bubble-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  opacity: 0.15;
  filter: blur(10px);
}

.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  animation: float 40s ease-in-out infinite;
}

/* Slower + larger movement */
@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(80px, -120px) scale(1.6);
  }
  50% {
    transform: translate(-60px, 100px) scale(1.2);
  }
  75% {
    transform: translate(120px, 60px) scale(1.8);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

/* Bright bubbles (opacity 0.9) */
.bright {
  opacity: 0.9;
}

/* Dim bubbles (red + orange) */
.dim {
  opacity: 0.3;
}

/* Bubbles with Material Design 3 colors */
.bubble:nth-child(1) {
  width: 220px;
  height: 220px;
  background: #00dddd;
  top: 10%;
  left: 15%;
  animation-duration: 42s;
}

.bubble:nth-child(2) {
  width: 300px;
  height: 300px;
  background: #6fd7d6;
  top: 60%;
  left: 70%;
  animation-duration: 48s;
  animation-delay: 5s;
}

.bubble:nth-child(3) {
  width: 260px;
  height: 260px;
  background: #ff6b35;
  top: 30%;
  left: 50%;
  animation-duration: 45s;
  animation-delay: 8s;
}

.bubble:nth-child(4) {
  width: 280px;
  height: 280px;
  background: #00fbfb;
  top: 75%;
  left: 25%;
  animation-duration: 50s;
  animation-delay: 6s;
}

.bubble:nth-child(5) {
  width: 200px;
  height: 200px;
  background: #3399ff;
  top: 20%;
  left: 80%;
  animation-duration: 38s;
  animation-delay: 4s;
}

.bubble:nth-child(6) {
  width: 320px;
  height: 320px;
  background: #ff4444;
  top: 50%;
  left: 10%;
  animation-duration: 55s;
  animation-delay: 10s;
}

.bubble:nth-child(7) {
  width: 240px;
  height: 240px;
  background: #00aaaa;
  top: 85%;
  left: 60%;
  animation-duration: 43s;
  animation-delay: 7s;
}

.bubble:nth-child(8) {
  width: 270px;
  height: 270px;
  background: #ff8833;
  top: 40%;
  left: 30%;
  animation-duration: 47s;
  animation-delay: 9s;
}

.bubble:nth-child(9) {
  width: 230px;
  height: 230px;
  background: #33ffcc;
  top: 15%;
  left: 40%;
  animation-duration: 44s;
  animation-delay: 6s;
}

.bubble:nth-child(10) {
  width: 310px;
  height: 310px;
  background: #3366ff;
  top: 65%;
  left: 85%;
  animation-duration: 52s;
  animation-delay: 8s;
}

.bubble:nth-child(11) {
  width: 290px;
  height: 290px;
  background: #cc3333;
  top: 35%;
  left: 75%;
  animation-duration: 53s;
  animation-delay: 12s;
}
</style>
