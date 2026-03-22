<template>
  <div>
    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-fixed-dim to-secondary z-50 scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <main class="relative pt-16">
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-[100vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <!-- Animated Background -->
        <BubbleBackground />
        
        <!-- Ambient Glows with pulse animation -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary-fixed-dim/10 blur-[120px] rounded-full animate-pulse-glow"></div>
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-fixed-dim/10 blur-[120px] rounded-full animate-pulse-glow" style="animation-delay: 2s;"></div>
        
        <div class="relative z-10 text-center max-w-5xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-sm text-neutral-300 font-medium">Production Ready v1.0</span>
          </div>
          
          <h1 class="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.95] animate-slide-up">
            <span class="block">Debug Go</span>
            <span class="gradient-text">Like Magic</span>
          </h1>
          
          <p class="font-body text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.1s;">
            The ethereal debugging toolkit. Structured logging, real-time memory stats, and panic recovery — all in one import.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style="animation-delay: 0.2s;">
            <button class="glow-button bg-white text-black font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2 group" @click="scrollToInstall">
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              Get Started
            </button>
            <div class="glass-panel px-6 py-4 rounded-lg border border-white/10 flex items-center gap-3">
              <code class="font-mono text-primary-fixed-dim text-sm">go get github.com/denzeysenpai/miru</code>
              <button class="text-neutral-400 hover:text-white transition-colors" @click="copyInstall">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Hero Visual - Terminal Window -->
        <div class="relative w-full max-w-4xl animate-float" style="animation-duration: 10s;">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-fixed-dim/20 to-secondary/20 rounded-2xl blur-xl"></div>
          <div class="relative bg-neutral-900/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <!-- Terminal Header -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div class="flex-1 text-center">
                <span class="text-xs text-neutral-500 font-mono">miru — debug</span>
              </div>
            </div>
            <!-- Terminal Content -->
            <div class="p-6 font-mono text-sm">
              <div class="flex items-center gap-2 text-neutral-500 mb-2">
                <span class="text-green-400">➜</span>
                <span>~</span>
                <span class="text-primary-fixed-dim">go run main.go</span>
              </div>
              <div class="space-y-1 text-neutral-300 typing-animation">
                <p><span class="text-primary-fixed-dim">miru.Init</span>(miru.Config{Dashboard: <span class="text-secondary">true</span>})</p>
                <p class="text-neutral-500">2026-05-20 14:02:11 <span class="text-green-400">[INFO]</span> Miru starting on :8080</p>
                <p class="text-neutral-500">2026-05-20 14:02:12 <span class="text-blue-400">[DEBUG]</span> Mem: Alloc=1.2MB Sys=8.4MB</p>
                <p class="text-neutral-500">2026-05-20 14:02:13 <span class="text-yellow-400">[WALK]</span> map[string]int{"speed": 100}</p>
              </div>
              <div class="mt-4 flex items-center gap-2">
                <span class="text-green-400">➜</span>
                <span>~</span>
                <span class="w-2 h-4 bg-primary-fixed-dim animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 animate-bounce-subtle">
          <span class="text-xs uppercase tracking-widest">Scroll</span>
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
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
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span class="text-xs font-bold text-primary-fixed-dim uppercase tracking-widest">6 Powerful Tools</span>
            </div>
            <h2 class="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Everything You Need</h2>
            <p class="text-neutral-400 text-lg max-w-2xl mx-auto">A complete debugging toolkit in a single import. No bloat, no dependencies, just pure functionality.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="(feature, i) in features" 
              :key="i"
              class="glass-panel feature-card p-8 rounded-2xl border border-white/10 flex flex-col h-full hover:border-primary-fixed-dim/50 group reveal-on-scroll"
              :style="{ animationDelay: i * 0.1 + 's' }"
            >
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" />
              </div>
              <h3 class="font-headline text-2xl font-bold text-white mb-3">{{ feature.title }}</h3>
              <p class="text-neutral-400 flex-grow leading-relaxed">{{ feature.desc }}</p>
              <div class="mt-4 flex items-center gap-2 text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-sm font-medium">Learn more</span>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
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
            <div class="absolute -inset-4 bg-primary-fixed-dim/10 blur-3xl rounded-full animate-pulse-glow"></div>
            <div class="relative glass-panel rounded-2xl border border-outline-variant/20 p-2 shadow-[0_0_100px_rgba(0,255,255,0.05)] animate-float" style="animation-duration: 8s;">
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
              <NuxtLink to="/docs" class="glow-button bg-white text-on-primary-fixed font-bold py-4 px-10 rounded-lg text-lg inline-block">
                Get Started
              </NuxtLink>
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
          <p class="text-neutral-500 font-body text-sm">© 2026 Miru Toolkit. Released under MIT License.</p>
        </div>
        <div class="flex gap-8 text-sm font-body">
          <NuxtLink to="/docs" class="text-neutral-500 hover:text-white transition-colors">Documentation</NuxtLink>
          <a class="text-neutral-500 hover:text-white transition-colors" href="https://github.com/denzeysenpai/miru" target="_blank">GitHub</a>
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

// Scroll progress tracking
const scrollProgress = ref(0);

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

const copyInstall = () => {
  navigator.clipboard.writeText('go get github.com/denzeysenpai/miru');
};

// Intersection Observer for scroll spy
let observer = null;

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

onMounted(() => {
  // Scroll progress
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));
  
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
  window.removeEventListener('scroll', handleScroll);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style>
/* Scroll progress bar */
.scroll-progress {
  transition: width 0.1s ease-out;
}

/* Reveal on scroll animation */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Fade in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Typing animation for terminal lines */
.typing-animation p {
  opacity: 0;
  animation: type-line 0.5s ease forwards;
}

.typing-animation p:nth-child(1) { animation-delay: 0.5s; }
.typing-animation p:nth-child(2) { animation-delay: 1s; }
.typing-animation p:nth-child(3) { animation-delay: 1.5s; }
.typing-animation p:nth-child(4) { animation-delay: 2s; }

@keyframes type-line {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse glow animation */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(90deg, #00dddd, #6fd7d6, #00fbfb, #00dddd);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Slide up reveal */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

/* Glow button pulse */
.glow-button {
  position: relative;
  transition: all 0.3s ease;
}

.glow-button::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #00dddd, #6fd7d6, #00fbfb);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(10px);
}

.glow-button:hover::before {
  opacity: 0.6;
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px -10px rgba(0, 221, 221, 0.5);
}

/* Glass panel shimmer */
.glass-panel {
  position: relative;
  overflow: hidden;
}

.glass-panel::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.glass-panel:hover::after {
  transform: translateX(100%);
}

/* Feature card hover */
.feature-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px -20px rgba(0, 221, 221, 0.15);
}

/* Typing cursor */
@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.typing-cursor::after {
  content: '|';
  animation: blink 1s infinite;
  color: #00dddd;
}

/* Scroll indicator bounce */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Spin slow */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
