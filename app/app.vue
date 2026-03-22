<template>
  <div class="min-h-screen bg-surface-container-lowest">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-2xl border-b border-white/5 h-16">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-white uppercase font-headline hover:text-primary-fixed-dim transition-colors">
          miru
        </NuxtLink>
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            to="/"
            :class="['font-headline tracking-tight text-sm transition-colors', $route.path === '/' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']"
          >Home</NuxtLink>
          <NuxtLink 
            to="/docs"
            :class="['font-headline tracking-tight text-sm transition-colors', $route.path === '/docs' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']"
          >Documentation</NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <a href="https://github.com/denzeysenpai/miru" target="_blank" class="text-cyan-400 hover:bg-white/5 p-2 rounded transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
    
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style>
/* Additional Tailwind-like utilities */
.text-primary-fixed-dim {
  color: #00dddd;
}

.bg-primary-fixed-dim {
  background-color: #00dddd;
}

.text-on-primary-fixed {
  color: #002020;
}

.text-on-surface-variant {
  color: #b9cac9;
}

.text-secondary {
  color: #6fd7d6;
}

.border-primary-fixed-dim\/30 {
  border-color: rgba(0, 221, 221, 0.3);
}

.bg-secondary-container\/20 {
  background-color: rgba(47, 160, 159, 0.2);
}

.bg-primary-fixed-dim\/5 {
  background-color: rgba(0, 221, 221, 0.05);
}

.bg-primary-fixed-dim\/10 {
  background-color: rgba(0, 221, 221, 0.1);
}

.bg-secondary-fixed-dim\/5 {
  background-color: rgba(111, 215, 214, 0.05);
}

.from-primary-fixed-dim\/5 {
  --tw-gradient-from: rgba(0, 221, 221, 0.05);
}

.border-outline-variant\/15 {
  border-color: rgba(58, 74, 73, 0.15);
}

.border-outline-variant\/10 {
  border-color: rgba(58, 74, 73, 0.10);
}

.border-outline-variant\/20 {
  border-color: rgba(58, 74, 73, 0.20);
}

.border-cyan-400 {
  border-color: #00dddd;
}

.text-cyan-400 {
  color: #00dddd;
}

/* Syntax highlighting colors */
.text-secondary {
  color: #6fd7d6;
}

.text-primary-fixed {
  color: #00fbfb;
}

.text-on-surface-variant {
  color: #b9cac9;
}

.text-on-surface {
  color: #e5e2e1;
}
</style>
