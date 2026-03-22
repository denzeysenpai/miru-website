<template>
  <section id="install" class="install-section">
    <div class="section">
      <div class="install-container">
        <div class="install-content">
          <div class="section-header">
            <span class="section-label">Get Started</span>
            <h2 class="section-title">Installation</h2>
            <p class="section-description">
              Add Miru to your Go project in seconds.
            </p>
          </div>

          <div class="install-steps">
            <!-- Step 1 -->
            <div class="install-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3 class="step-title">Install the Package</h3>
                <p class="step-description">Add Miru to your Go project using go get</p>
                <div class="code-snippet">
                  <code>go get github.com/denzeysenpai/miru</code>
                  <button class="copy-btn" @click="copyInstall">
                    <span v-if="copiedInstall">✓</span>
                    <span v-else>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="install-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3 class="step-title">Import and Initialize</h3>
                <p class="step-description">Import Miru and create a debugger instance</p>
                <div class="code-snippet code-block small">
                  <code><span class="keyword">import</span> <span class="string">"github.com/denzeysenpai/miru"</span>

<span class="keyword">func</span> <span class="function">main</span>() {
    debug := miru.<span class="function">NewDebugger</span>()
    debug.<span class="function">Out</span>(<span class="string">"Hello from Miru!"</span>)
}</code>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="install-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3 class="step-title">Configure (Optional)</h3>
                <p class="step-description">Customize Miru with your preferred settings</p>
                <div class="code-snippet code-block small">
                  <code>cfg := miru.DebugConfig{
    OutputPath:   <span class="string">"./Debug Output"</span>,
    FolderBy:     miru.Month,
    Colorful:     <span class="keyword">true</span>,
    WithContext:  <span class="keyword">true</span>,
    IncludeTests: <span class="keyword">false</span>,
}
debug.<span class="function">Config</span>(cfg)</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Card -->
        <div class="install-card">
          <div class="card-icon">🦀</div>
          <h3 class="card-title">Ready to Debug?</h3>
          <p class="card-description">
            Miru is open source and free to use. Check out the documentation for more examples and advanced usage.
          </p>
          <div class="card-links">
            <a 
              href="https://github.com/denzeysenpai/miru" 
              target="_blank" 
              class="btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
          <div class="card-stats">
            <div class="stat">
              <span class="stat-value">Go</span>
              <span class="stat-label">Language</span>
            </div>
            <div class="stat">
              <span class="stat-value">MIT</span>
              <span class="stat-label">License</span>
            </div>
            <div class="stat">
              <span class="stat-value">1.0</span>
              <span class="stat-label">Version</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const copiedInstall = ref(false)

const copyInstall = async () => {
  await navigator.clipboard.writeText('go get github.com/denzeysenpai/miru')
  copiedInstall.value = true
  setTimeout(() => copiedInstall.value = false, 2000)
}
</script>

<style scoped>
.install-section {
  background: var(--bg-secondary);
  padding: 4rem 0;
}

.install-container {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  align-items: start;
}

/* Header */
.section-header {
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary);
  color: var(--ocean-cyan);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

/* Install Steps */
.install-steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.install-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  width: 48px;
  height: 48px;
  background: var(--gradient-ocean);
  color: white;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(45, 138, 138, 0.3);
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* Code Snippet */
.code-snippet {
  background: var(--bg-secondary);
  color: var(--ocean-light);
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid var(--border-color);
}

.code-snippet.small {
  padding: 1rem;
  font-size: 0.8125rem;
  line-height: 1.8;
  display: block;
  overflow-x: auto;
}

.code-snippet .keyword { color: #ff8b94; }
.code-snippet .string { color: #7fdbda; }
.code-snippet .function { color: #ffd93d; }

.copy-btn {
  padding: 0.5rem;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 6px;
  color: var(--ocean-cyan);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-btn:hover {
  background: var(--border-hover);
}

/* Install Card */
.install-card {
  background: var(--bg-card);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 2rem;
  border: 1px solid var(--border-color);
  text-align: center;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.card-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card-links {
  margin-bottom: 2rem;
}

.card-links .btn-primary {
  width: 100%;
  justify-content: center;
}

/* Stats */
.card-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ocean-cyan);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 968px) {
  .install-container {
    grid-template-columns: 1fr;
  }
  
  .install-card {
    position: static;
    order: -1;
  }
}

@media (max-width: 768px) {
  .install-step {
    gap: 1rem;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .code-snippet {
    font-size: 0.8125rem;
    padding: 0.75rem 1rem;
  }
  
  .install-card {
    padding: 1.5rem;
  }
}
</style>
