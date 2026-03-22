<template>
  <nav class="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-2xl border-b border-white/5 h-16">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
      <!-- Logo -->
      <div class="text-2xl font-bold tracking-tighter text-white uppercase font-headline">
        miru
      </div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <a class="nav-link active" href="#install">Install</a>
        <a class="nav-link" href="#quickstart">Quick Start</a>
        <a class="nav-link" href="#features">Features</a>
        <a class="nav-link" href="#dashboard">Dashboard</a>
      </div>
      
      <!-- Actions -->
      <div class="flex items-center gap-4">
        <a 
          href="https://github.com/denzeysenpai/miru" 
          target="_blank"
          class="text-cyan-400 hover:bg-white/5 p-2 rounded transition-all duration-300"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Navigation component - fixed header with blur effect
</script>

<style scoped>
nav {
  font-family: var(--font-headline);
}

.nav-link {
  font-size: 0.875rem;
  letter-spacing: -0.025em;
  color: #a3a3a3;
  text-decoration: none;
  transition: color 150ms ease;
  font-family: var(--font-headline);
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.active {
  color: #ffffff;
  border-bottom-color: #00dddd;
}

.text-cyan-400 {
  color: var(--color-primary-fixed-dim);
}
</style>
