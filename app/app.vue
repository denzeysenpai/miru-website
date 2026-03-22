<template>
  <div class="min-h-screen bg-surface-container-lowest selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-2xl border-b border-white/5 h-16">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div class="text-2xl font-bold tracking-tighter text-white uppercase font-headline">
          miru
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a 
            :class="['font-headline tracking-tight text-sm transition-colors', activeSection === 'install' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']" 
            href="#install"
          >Install</a>
          <a 
            :class="['font-headline tracking-tight text-sm transition-colors', activeSection === 'quickstart' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']" 
            href="#quickstart"
          >Quick Start</a>
          <a 
            :class="['font-headline tracking-tight text-sm transition-colors', activeSection === 'features' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']" 
            href="#features"
          >Features</a>
          <a 
            :class="['font-headline tracking-tight text-sm transition-colors', activeSection === 'dashboard' ? 'text-white border-b border-cyan-400 pb-1' : 'text-neutral-400 hover:text-white']" 
            href="#dashboard"
          >Dashboard</a>
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

    <main class="relative pt-16">
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <!-- Ambient Glows -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary-fixed-dim/5 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-fixed-dim/5 blur-[120px] rounded-full"></div>
        
        <div class="relative z-10 text-center max-w-4xl mx-auto">
          <h1 class="font-headline text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            A Go debugger <span class="gradient-text">toolkit library</span> for developers.
          </h1>
          <p class="font-body text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Highly optimized logging, real-time memory stats, and fluent error handling for modern Go applications.
          </p>
          
          <div class="glass-panel p-1 rounded-xl inline-block mb-16 border border-outline-variant/15">
            <div class="flex flex-col md:flex-row items-center gap-4 px-6 py-4">
              <code class="font-mono text-primary-fixed-dim tracking-tight text-sm md:text-base">
                go get github.com/denzeysenpai/miru
              </code>
              <button class="glow-button bg-gradient-to-br from-primary-fixed-dim to-secondary text-on-primary-fixed font-bold py-3 px-8 rounded-lg" @click="scrollToInstall">
                Install Now
              </button>
            </div>
          </div>
        </div>

        <!-- Hero Visual -->
        <div class="relative w-full max-w-5xl aspect-video glass-panel rounded-2xl border border-outline-variant/15 overflow-hidden shadow-2xl">
          <img 
            class="w-full h-full object-cover opacity-60" 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80" 
            alt="Terminal Interface"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 right-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div class="space-y-2 font-mono text-xs md:text-sm">
              <p class="text-primary-fixed-dim">miru.Init(miru.Config{Dashboard: true})</p>
              <p class="text-on-surface-variant">2024-05-20 14:02:11 [INFO] Miru starting on :8080</p>
              <p class="text-on-surface-variant">2024-05-20 14:02:12 [DEBUG] Mem: Alloc=1.2MB Sys=8.4MB</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Start Section -->
      <section class="py-32 px-6 bg-surface-container-low" id="quickstart">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-headline text-4xl font-bold text-white mb-6">Effortless Integration</h2>
            <p class="text-on-surface-variant text-lg mb-8">
              Designed to be imported and active in seconds. Miru provides a set of primitives that make debugging Go code as natural as writing it.
            </p>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <svg class="text-primary-fixed-dim mt-1 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <div>
                  <p class="font-bold text-white">Zero Configuration</p>
                  <p class="text-on-surface-variant text-sm">Reasonable defaults for every environment.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg class="text-primary-fixed-dim mt-1 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <div>
                  <p class="font-bold text-white">High Performance</p>
                  <p class="text-on-surface-variant text-sm">Minimal allocation overhead for logging and traces.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-surface-container-lowest rounded-xl p-0.5 border border-outline-variant/15 overflow-hidden shadow-2xl">
            <div class="bg-surface-container-high px-4 py-2 flex justify-between items-center">
              <span class="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">main.go</span>
              <div class="flex gap-1.5">
                <div class="w-2 h-2 rounded-full bg-outline-variant/40"></div>
                <div class="w-2 h-2 rounded-full bg-outline-variant/40"></div>
              </div>
            </div>
            <div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <pre class="text-on-surface"><span class="text-secondary">package</span> main

<span class="text-secondary">import</span> (
    <span class="text-primary-fixed">"github.com/denzeysenpai/miru"</span>
)

<span class="text-secondary">func</span> main() {
    <span class="text-on-surface-variant">// Start debugging immediately</span>
    <span class="text-secondary">defer</span> miru.Catch()

    miru.Out(<span class="text-primary-fixed">"Welcome to the ethereal console"</span>)
    
    val := map[string]int{<span class="text-primary-fixed">"speed"</span>: 100}
    miru.Walk(val)
}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Bento Grid -->
      <section class="py-32 px-6" id="features">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Core Toolkit</h2>
            <p class="text-on-surface-variant text-lg">Every utility you need, distilled into a single import.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="(feature, i) in features" 
              :key="i"
              class="glass-panel p-8 rounded-xl border border-outline-variant/15 flex flex-col h-full hover:border-primary-fixed-dim/30 transition-all duration-300 group"
            >
              <div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform">
                <component :is="feature.icon" />
              </div>
              <h3 class="font-headline text-2xl font-bold text-white mb-4">{{ feature.title }}</h3>
              <p class="text-on-surface-variant flex-grow">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Dashboard Preview Section -->
      <section class="py-32 px-6 bg-surface-container-low overflow-hidden relative" id="dashboard">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div class="w-full lg:w-1/2">
            <h2 class="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Remote Dashboard</h2>
            <p class="text-on-surface-variant text-lg mb-12">
              Step out of the terminal and into a live, interactive environment. Miru's built-in dashboard provides a crystalline view of your running application.
            </p>
            <div class="space-y-6">
              <div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <span class="text-white font-medium">SSE Live Streaming Logs</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <span class="text-white font-medium">Instant Search & Log Filtering</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M6 8h.01M6 12h.01M6 16h.01"/>
                </svg>
                <span class="text-white font-medium">Blazing Fast Keyboard Shortcuts</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 relative">
            <div class="absolute -inset-4 bg-primary-fixed-dim/10 blur-3xl rounded-full"></div>
            <div class="relative glass-panel rounded-2xl border border-outline-variant/20 p-2 shadow-[0_0_100px_rgba(0,255,255,0.05)]">
              <img 
                class="rounded-xl w-full" 
                :src="dashboardImg" 
                alt="Dashboard Preview"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Test Groups Section -->
      <section class="py-32 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary mb-8 text-[10px] font-headline font-bold tracking-widest uppercase">
            Developer Experience
          </div>
          <h2 class="font-headline text-4xl font-bold text-white mb-6">TestGroup Architecture</h2>
          <p class="text-on-surface-variant text-lg mb-12">
            Organize complex test suites with semantic grouping. Miru's TestGroup feature helps you maintain sanity in large scale Go testing environments.
          </p>
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="p-6 rounded-xl bg-surface-container-low border-l-4 border-primary-fixed-dim">
              <h4 class="text-white font-bold mb-2">Hierarchical Logging</h4>
              <p class="text-sm text-on-surface-variant">Logs are nested within test groups for easier tracing of failures in parallel runs.</p>
            </div>
            <div class="p-6 rounded-xl bg-surface-container-low border-l-4 border-secondary">
              <h4 class="text-white font-bold mb-2">Automated Teardowns</h4>
              <p class="text-sm text-on-surface-variant">Seamless integration with Go's testing package for resource cleanup.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-32 px-6" id="install">
        <div class="max-w-5xl mx-auto relative glass-panel rounded-3xl border border-outline-variant/20 overflow-hidden text-center p-12 md:p-24">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/5 to-transparent"></div>
          <div class="relative z-10">
            <h2 class="font-headline text-4xl md:text-6xl font-bold text-white mb-8">Ready to debug in high fidelity?</h2>
            <p class="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Join the hundreds of Go developers building faster, more reliable applications with Miru.</p>
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
              <button class="glow-button bg-white text-on-primary-fixed font-bold py-4 px-10 rounded-lg text-lg">
                Get Started
              </button>
              <a class="flex items-center gap-2 text-white hover:text-primary-fixed-dim transition-colors group" href="https://github.com/denzeysenpai/miru" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-950 w-full py-12 px-6 border-t border-neutral-800/20">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-lg font-bold text-white font-headline uppercase tracking-tighter">miru</div>
          <p class="text-neutral-500 font-body text-sm">© 2024 Miru Toolkit. Released under MIT License.</p>
        </div>
        <div class="flex gap-8 text-sm font-body">
          <a class="text-neutral-500 hover:text-white transition-colors" href="#">Community</a>
          <a class="text-neutral-500 hover:text-white transition-colors" href="https://github.com/denzeysenpai/miru" target="_blank">GitHub</a>
          <a class="text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a>
          <a class="text-neutral-500 hover:text-white transition-colors" href="#">Status</a>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 hover:text-cyan-400 cursor-pointer transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="4 17 10 11 4 5"/>
              <line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { h, ref, onMounted, onUnmounted } from 'vue';
import dashboardImg from '../assets/images/new-dashboard.png';

// Active section tracking for navbar
const activeSection = ref('install');

// Icon components as simple SVGs
const ActivityIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })
]);

const TerminalIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('polyline', { points: '4 17 10 11 4 5' }),
  h('line', { x1: 12, y1: 19, x2: 20, y2: 19 })
]);

const LayoutIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }),
  h('line', { x1: 3, y1: 9, x2: 21, y2: 9 }),
  h('line', { x1: 9, y1: 21, x2: 9, y2: 9 })
]);

const TimerIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('line', { x1: 10, y1: 2, x2: 10, y2: 6 }),
  h('line', { x1: 14, y1: 2, x2: 14, y2: 6 }),
  h('line', { x1: 10, y1: 18, x2: 10, y2: 22 }),
  h('line', { x1: 14, y1: 18, x2: 14, y2: 22 }),
  h('rect', { x: 2, y: 6, width: 20, height: 12, rx: 2 })
]);

const CpuIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('rect', { x: 4, y: 4, width: 16, height: 16, rx: 2 }),
  h('rect', { x: 9, y: 9, width: 6, height: 6 }),
  h('line', { x1: 9, y1: 1, x2: 9, y2: 4 }),
  h('line', { x1: 15, y1: 1, x2: 15, y2: 4 }),
  h('line', { x1: 9, y1: 20, x2: 9, y2: 23 }),
  h('line', { x1: 15, y1: 20, x2: 15, y2: 23 }),
  h('line', { x1: 20, y1: 9, x2: 23, y2: 9 }),
  h('line', { x1: 20, y1: 14, x2: 23, y2: 14 }),
  h('line', { x1: 1, y1: 9, x2: 4, y2: 9 }),
  h('line', { x1: 1, y1: 14, x2: 4, y2: 14 })
]);

const AlertCircleIcon = () => h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('circle', { cx: 12, cy: 12, r: 10 }),
  h('line', { x1: 12, y1: 8, x2: 12, y2: 12 }),
  h('line', { x1: 12, y1: 16, x2: 12.01, y2: 16 })
]);

const features = [
  { icon: ActivityIcon, title: 'Catch', desc: 'Panic recovery with full stack context. Never lose the reason why your service crashed.' },
  { icon: TerminalIcon, title: 'Out', desc: 'High-performance console logging designed for speed and human readability.' },
  { icon: LayoutIcon, title: 'Walk', desc: 'Pretty-print complex structs, deep slices, and massive maps with indentation and color.' },
  { icon: TimerIcon, title: 'Trace', desc: 'Simple execution time measurement. Find bottlenecks in your logic with a single line.' },
  { icon: CpuIcon, title: 'Mem', desc: 'Real-time memory statistics. Monitor allocations and GC pauses in the console or dashboard.' },
  { icon: AlertCircleIcon, title: 'IfErr', desc: 'Fluent error handling syntax. Simplify chains with Retry, Panic, and Do/Else logic.' }
];

const scrollToInstall = () => {
  document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
};

// Intersection Observer for scroll spy
let observer = null;

onMounted(() => {
  const sections = ['install', 'quickstart', 'features', 'dashboard'];
  const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });
  
  sectionElements.forEach(el => observer.observe(el));
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
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
