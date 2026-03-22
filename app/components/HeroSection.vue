<template>
  <section class="hero">
    <!-- Animated Background Blobs -->
    <div class="hero-blobs">
      <div class="blob blob-1 animate-blob"></div>
      <div class="blob blob-2 animate-blob" style="animation-delay: -2s;"></div>
      <div class="blob blob-3 animate-blob" style="animation-delay: -4s;"></div>
    </div>

    <!-- Background Images with Overlay -->
    <div class="hero-images">
      <div 
        class="hero-image active" 
        :style="{ backgroundImage: `url(${currentImage})` }"
      >
        <div class="hero-overlay"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="hero-badge animate-fade-in">
        <span class="badge-icon">🦀</span>
        <span>Go Debugger Toolkit</span>
      </div>
      
      <h1 class="hero-title animate-fade-in stagger-1">
        <span class="title-line">See Clearly.</span>
        <span class="title-line gradient-text">Debug Beautifully.</span>
      </h1>
      
      <p class="hero-description animate-fade-in stagger-2">
        A structured panic recovery, logging, testing, and tracing toolkit 
        for Go developers who value elegant debugging.
      </p>
      
      <div class="hero-actions animate-fade-in stagger-3">
        <button class="btn-primary" @click="scrollToInstall">
          <span>Get Started</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </button>
        <a 
          href="https://github.com/denzeysenpai/miru" 
          target="_blank" 
          class="btn-secondary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>

      <!-- Feature Preview Cards -->
      <div class="hero-preview animate-fade-in stagger-4">
        <div class="preview-card">
          <span class="preview-icon">🎯</span>
          <span class="preview-text">Panic Recovery</span>
        </div>
        <div class="preview-card">
          <span class="preview-icon">📊</span>
          <span class="preview-text">Live Dashboard</span>
        </div>
        <div class="preview-card">
          <span class="preview-icon">⚡</span>
          <span class="preview-text">Tracing</span>
        </div>
        <div class="preview-card">
          <span class="preview-icon">🧪</span>
          <span class="preview-text">Testing</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" @click="scrollToFeatures">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </div>

    <!-- Image Attribution -->
    <div class="image-attribution">
      <span>Photo by </span>
      <a :href="currentPhotographerUrl" target="_blank">{{ currentPhotographer }}</a>
      <span> on </span>
      <a href="https://unsplash.com" target="_blank">Unsplash</a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1542640244-7e672d6af4e3?w=1920&q=80',
    photographer: 'Shigeki Wakabayashi',
    photographerUrl: 'https://unsplash.com/@kugedo6060'
  },
  {
    url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80',
    photographer: 'Lin Mei',
    photographerUrl: 'https://unsplash.com/@mytinyatlas'
  },
  {
    url: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1920&q=80',
    photographer: 'Moiz K. Malik',
    photographerUrl: 'https://unsplash.com/@moizk'
  }
]

const currentIndex = ref(0)
const currentImage = ref(images[0].url)
const currentPhotographer = ref(images[0].photographer)
const currentPhotographerUrl = ref(images[0].photographerUrl)

let imageInterval

onMounted(() => {
  imageInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    currentImage.value = images[currentIndex.value].url
    currentPhotographer.value = images[currentIndex.value].photographer
    currentPhotographerUrl.value = images[currentIndex.value].photographerUrl
  }, 6000)
})

onUnmounted(() => {
  clearInterval(imageInterval)
})

const scrollToInstall = () => {
  document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToFeatures = () => {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

/* Animated Blobs */
.hero-blobs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--ocean-cyan);
  top: -100px;
  left: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--ocean-mint);
  bottom: -50px;
  right: -50px;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: var(--coral-light);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Background Images */
.hero-images {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 1.5s ease-in-out;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 79, 79, 0.85) 0%,
    rgba(45, 138, 138, 0.75) 50%,
    rgba(78, 205, 196, 0.65) 100%
  );
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-icon {
  font-size: 1.25rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
}

.title-line:last-child {
  margin-top: 0.25rem;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

/* Preview Cards */
.hero-preview {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.preview-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.preview-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.preview-icon {
  font-size: 1.25rem;
}

.preview-text {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid white;
  border-radius: 13px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { opacity: 1; top: 8px; }
  50% { opacity: 0.3; top: 20px; }
}

.scroll-indicator span {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Image Attribution */
.image-attribution {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.image-attribution a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.image-attribution a:hover {
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-preview {
    gap: 0.5rem;
  }
  
  .preview-card {
    padding: 0.5rem 1rem;
  }
  
  .preview-text {
    display: none;
  }
  
  .image-attribution {
    bottom: 4rem;
    right: 50%;
    transform: translateX(50%);
    text-align: center;
  }
}
</style>
