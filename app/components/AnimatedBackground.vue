<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Floating Orbs -->
    <div 
      v-for="(orb, i) in orbs" 
      :key="i"
      class="absolute rounded-full blur-3xl opacity-20 animate-float"
      :style="{
        width: orb.size + 'px',
        height: orb.size + 'px',
        background: orb.color,
        left: orb.x + '%',
        top: orb.y + '%',
        animationDelay: orb.delay + 's',
        animationDuration: orb.duration + 's'
      }"
    />
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: linear-gradient(rgba(0,221,221,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,221,221,0.3) 1px, transparent 1px); background-size: 60px 60px;">
    </div>
    
    <!-- Shooting Stars -->
    <div 
      v-for="(star, i) in stars" 
      :key="'star-'+i"
      class="absolute h-px w-20 bg-gradient-to-r from-transparent via-primary-fixed-dim to-transparent animate-shoot"
      :style="{
        top: star.y + '%',
        left: star.x + '%',
        animationDelay: star.delay + 's'
      }"
    />
  </div>
</template>

<script setup>
const orbs = [
  { size: 400, color: 'radial-gradient(circle, rgba(0,221,221,0.4) 0%, transparent 70%)', x: 10, y: 20, delay: 0, duration: 20 },
  { size: 300, color: 'radial-gradient(circle, rgba(111,215,214,0.3) 0%, transparent 70%)', x: 80, y: 60, delay: 5, duration: 25 },
  { size: 250, color: 'radial-gradient(circle, rgba(0,251,251,0.25) 0%, transparent 70%)', x: 60, y: 10, delay: 10, duration: 22 },
  { size: 350, color: 'radial-gradient(circle, rgba(0,221,221,0.2) 0%, transparent 70%)', x: 30, y: 70, delay: 15, duration: 28 },
];

const stars = [
  { x: -10, y: 15, delay: 0 },
  { x: -10, y: 45, delay: 3 },
  { x: -10, y: 75, delay: 6 },
  { x: -10, y: 30, delay: 9 },
];
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.95);
  }
  75% {
    transform: translate(20px, 10px) scale(1.05);
  }
}

@keyframes shoot {
  0% {
    transform: translateX(0) rotate(-45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(100vw + 100px)) rotate(-45deg);
    opacity: 0;
  }
}

.animate-float {
  animation: float ease-in-out infinite;
}

.animate-shoot {
  animation: shoot linear infinite;
  animation-duration: 4s;
}
</style>
