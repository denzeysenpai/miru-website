<template>
  <section id="features" class="features-section">
    <!-- Decorative Elements -->
    <div class="wave-top">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path 
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,0 L0,0 Z" 
          fill="#f4e4d4"
        />
      </svg>
    </div>

    <div class="section">
      <div class="section-header">
        <span class="section-label">Features</span>
        <h2 class="section-title">Everything You Need to Debug</h2>
        <p class="section-description">
          Miru provides a complete toolkit for debugging Go applications with style and clarity.
        </p>
      </div>

      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.id"
          class="feature-card"
          :class="{ 'featured': feature.featured }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon-wrapper" :class="`gradient-${feature.color}`">
            <span class="feature-icon">{{ feature.icon }}</span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-tags">
            <span 
              v-for="tag in feature.tags" 
              :key="tag"
              class="feature-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Wave -->
    <div class="wave-bottom">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path 
          d="M0,50 C360,0 720,100 1080,50 C1260,25 1380,75 1440,50 L1440,100 L0,100 Z" 
          fill="#e8f7f7"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 'catch',
    icon: '🛡️',
    title: 'Panic Recovery',
    description: 'Structured panic recovery with detailed logging to console and files. Never lose track of what went wrong.',
    tags: ['Catch', 'Recover', 'Log'],
    color: 'coral',
    featured: false
  },
  {
    id: 'dashboard',
    icon: '📊',
    title: 'Remote Dashboard',
    description: 'Live web UI with SSE streaming. Monitor logs, traces, and test results in real-time from your browser.',
    tags: ['Web UI', 'Live', 'SSE'],
    color: 'ocean',
    featured: true
  },
  {
    id: 'trace',
    icon: '⚡',
    title: 'Execution Tracing',
    description: 'Measure execution time with simple deferred calls. Know exactly where your bottlenecks are.',
    tags: ['Timing', 'Performance', 'Defer'],
    color: 'mint',
    featured: false
  },
  {
    id: 'test',
    icon: '🧪',
    title: 'Testing Suite',
    description: 'Built-in testing with Test() and TestGroup. Organize tests and get beautiful pass/fail reports.',
    tags: ['Test', 'Assert', 'Group'],
    color: 'coral',
    featured: false
  },
  {
    id: 'walk',
    icon: '🔍',
    title: 'Pretty Print',
    description: 'Inspect structs, slices, and maps with beautiful indented output. Configurable depth limits.',
    tags: ['Debug', 'Inspect', 'JSON'],
    color: 'mint',
    featured: false
  },
  {
    id: 'iferr',
    icon: '🔄',
    title: 'Error Flow',
    description: 'Fluent error handling with IfErr. Chain Do, Else, Panic, and Retry operations elegantly.',
    tags: ['Error', 'Chain', 'Retry'],
    color: 'ocean',
    featured: false
  }
]
</script>

<style scoped>
.features-section {
  position: relative;
  background: var(--sand);
  padding: 4rem 0 6rem;
}

/* Waves */
.wave-top,
.wave-bottom {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  overflow: hidden;
}

.wave-top {
  top: -99px;
}

.wave-bottom {
  bottom: -99px;
}

.wave-top svg,
.wave-bottom svg {
  width: 100%;
  height: 100%;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--ocean-pale);
  color: var(--ocean-teal);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-medium);
  max-width: 600px;
  margin: 0 auto;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Feature Card */
.feature-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--ocean-light);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-ocean);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(13, 79, 79, 0.15);
}

.feature-card.featured {
  grid-column: span 1;
  background: linear-gradient(135deg, var(--ocean-deep) 0%, var(--ocean-teal) 100%);
  color: white;
}

.feature-card.featured::before {
  background: var(--gradient-coral);
}

.feature-card.featured .feature-title,
.feature-card.featured .feature-description {
  color: white;
}

.feature-card.featured .feature-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Icon Wrapper */
.feature-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.gradient-ocean {
  background: linear-gradient(135deg, var(--ocean-cyan) 0%, var(--ocean-teal) 100%);
}

.gradient-coral {
  background: linear-gradient(135deg, var(--coral-light) 0%, var(--coral-soft) 100%);
}

.gradient-mint {
  background: linear-gradient(135deg, var(--ocean-mint) 0%, var(--ocean-cyan) 100%);
}

.feature-icon {
  font-size: 1.75rem;
}

/* Content */
.feature-title {
  font-size: 1.25rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.9375rem;
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Tags */
.feature-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.feature-tag {
  padding: 0.375rem 0.875rem;
  background: var(--ocean-pale);
  color: var(--ocean-teal);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 50px;
}

/* Responsive */
@media (min-width: 768px) {
  .feature-card.featured {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}
</style>
