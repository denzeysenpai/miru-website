<template>
  <section class="code-section">
    <div class="section">
      <div class="section-header">
        <span class="section-label">Code Examples</span>
        <h2 class="section-title gradient-text">See It in Action</h2>
        <p class="section-description">
          Clean, intuitive APIs that make debugging a breeze.
        </p>
      </div>

      <div class="code-showcase">
        <!-- Code Tabs -->
        <div class="code-tabs">
          <button
            v-for="example in examples"
            :key="example.id"
            class="code-tab"
            :class="{ active: activeTab === example.id }"
            @click="activeTab = example.id"
          >
            <span class="tab-icon">{{ example.icon }}</span>
            <span class="tab-label">{{ example.label }}</span>
          </button>
        </div>

        <!-- Code Display -->
        <div class="code-display">
          <div class="code-window">
            <div class="window-header">
              <div class="window-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="window-title">main.go</span>
              <button class="copy-btn" @click="copyCode">
                <span v-if="copied">✓ Copied!</span>
                <span v-else>Copy</span>
              </button>
            </div>
            <div class="window-content">
              <pre class="code-block"><code v-html="highlightedCode"></code></pre>
            </div>
          </div>

          <!-- Output Preview -->
          <div class="output-preview">
            <div class="output-header">
              <span class="output-title">🖥️ Console Output</span>
            </div>
            <div class="output-content">
              <div 
                v-for="(line, i) in currentOutput" 
                :key="i"
                class="output-line"
                :class="line.type"
              >
                <span class="timestamp">{{ line.timestamp }}</span>
                <span class="label" :style="{ color: line.labelColor }">{{ line.label }}</span>
                <span class="message">{{ line.message }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('quickstart')
const copied = ref(false)

const examples = [
  { id: 'quickstart', label: 'Quick Start', icon: '🚀' },
  { id: 'testing', label: 'Testing', icon: '🧪' },
  { id: 'error', label: 'Error Handling', icon: '🔄' },
  { id: 'trace', label: 'Tracing', icon: '⚡' }
]

const codeExamples = {
  quickstart: `package main

import "github.com/denzeysenpai/miru"

func main() {
    debug := miru.NewDebugger()
    
    // Console logging like console.log
    debug.Out("Hello", "World", 42)
    
    // Pretty print any value
    debug.Walk(map[string]int{
        "users": 100,
        "active": 75,
    })
    
    // Check memory stats
    debug.Mem()
}`,
  testing: `func TestUserAuth(debug *miru.Debugger) {
    // Group related tests
    tg := debug.TestGroup("User Auth")
    defer tg.Close()
    
    tg.Test("valid login", 
        authenticate("user", "pass") == nil)
    tg.Test("invalid password", 
        authenticate("user", "wrong") != nil)
    tg.Test("empty username", 
        authenticate("", "pass") != nil)
    
    // Or use Test() directly
    debug.Test("add", func() int { 
        return 2 + 2 
    }, 4)
}`,
  error: `func ProcessData(debug *miru.Debugger) {
    data, err := fetchData()
    
    // Fluent error handling
    debug.IfErr(err).
        Do(func() {
            debug.Out("Fetch failed")
        }).
        Else(func() {
            debug.Out("Success!")
        })
    
    // Or retry with backoff
    err = debug.IfErr(err).Retry(3, func() error {
        return reconnect()
    })
}`,
  trace: `func HeavyOperation(debug *miru.Debugger) {
    // Trace execution time
    defer debug.Trace("database")()
    
    // Your code here
    result, err := db.Query("SELECT * FROM users")
    
    // Panic recovery with context
    defer func() {
        if r := recover(); r != nil {
            debug.Catch(r)
        }
    }()
    
    processResult(result)
}`
}

const outputExamples = {
  quickstart: [
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'Hello', type: 'log' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'World', type: 'log' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: '42', type: 'log' },
    { label: '[Miru Walk]:', labelColor: '#4ecdc4', message: 'map (len 2)', type: 'info' },
    { label: '', labelColor: '', message: '  users: 100', type: 'indent' },
    { label: '', labelColor: '', message: '  active: 75', type: 'indent' },
    { label: '[Miru Mem]:', labelColor: '#7fdbda', message: 'alloc=12MB heap=8MB sys=45MB', type: 'success' }
  ],
  testing: [
    { label: '[Miru TGroup]:', labelColor: '#7fdbda', message: 'User Auth', type: 'header' },
    { label: '[0]', labelColor: '#5a8a8a', message: 'valid login -> PASSED', type: 'success' },
    { label: '[1]', labelColor: '#5a8a8a', message: 'invalid password -> PASSED', type: 'success' },
    { label: '[2]', labelColor: '#5a8a8a', message: 'empty username -> PASSED', type: 'success' },
    { label: '[Miru TGroup]:', labelColor: '#7fdbda', message: '(3 / 3)', type: 'summary' },
    { label: '[Miru Test]:', labelColor: '#7fdbda', message: 'add -> PASSED (0.20ms)', type: 'test' }
  ],
  error: [
    { label: '[Miru Err]:', labelColor: '#ff8b94', message: 'connection refused', type: 'error' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'retry 1/3 failed', type: 'log' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'retry 2/3 failed', type: 'log' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'Fetch failed', type: 'log' },
    { label: '[Miru Out]:', labelColor: '#ff8b94', message: 'Success!', type: 'success' }
  ],
  trace: [
    { label: '[Miru Trace]:', labelColor: '#7fdbda', message: 'database -> 0.25ms', type: 'trace' },
    { label: '[Miru Catch]:', labelColor: '#ff8b94', message: 'Caught: runtime error', type: 'error' }
  ]
}

const currentCode = computed(() => codeExamples[activeTab.value])
const currentOutput = computed(() => {
  const baseOutput = outputExamples[activeTab.value]
  return baseOutput.map(line => ({
    ...line,
    timestamp: new Date().toISOString().split('T')[1].slice(0, 8)
  }))
})

const highlightedCode = computed(() => {
  return currentCode.value
    .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
    .replace(/\b(package|import|func|var|defer|if|return|map|string|int|bool|nil|error)\b/g, '<span class="keyword">$1</span>')
    .replace(/\b(debug|miru)\b/g, '<span class="type">$1</span>')
    .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
    .replace(/\b(Out|Walk|Mem|TestGroup|Test|IfErr|Do|Else|Retry|Trace|Catch)\b\(/g, '<span class="function">$1</span>(')
})

const copyCode = async () => {
  await navigator.clipboard.writeText(currentCode.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<style scoped>
.code-section {
  background: var(--ocean-pale);
  padding: 4rem 0;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: white;
  color: var(--ocean-teal);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-medium);
}

/* Tabs */
.code-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.code-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-medium);
  cursor: pointer;
  transition: all 0.3s ease;
}

.code-tab:hover {
  border-color: var(--ocean-cyan);
  color: var(--ocean-teal);
}

.code-tab.active {
  background: var(--ocean-cyan);
  color: white;
  border-color: var(--ocean-cyan);
}

.tab-icon {
  font-size: 1.125rem;
}

/* Code Display */
.code-display {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

/* Code Window */
.code-window {
  background: #1a3a3a;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(13, 79, 79, 0.3);
}

.window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28c840; }

.window-title {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  color: var(--ocean-foam);
  opacity: 0.7;
}

.copy-btn {
  padding: 0.375rem 0.875rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  color: var(--ocean-foam);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.window-content {
  padding: 1.5rem;
  overflow-x: auto;
}

.window-content .code-block {
  background: transparent;
  padding: 0;
  border: none;
  font-size: 0.875rem;
  line-height: 1.8;
}

/* Output Preview */
.output-preview {
  background: #0d1f1f;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(78, 205, 196, 0.2);
}

.output-header {
  padding: 1rem 1.25rem;
  background: rgba(78, 205, 196, 0.1);
  border-bottom: 1px solid rgba(78, 205, 196, 0.2);
}

.output-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ocean-cyan);
}

.output-content {
  padding: 1.25rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.8125rem;
  line-height: 1.8;
  max-height: 300px;
  overflow-y: auto;
}

.output-line {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  flex-wrap: wrap;
}

.output-line .timestamp {
  color: #ffd93d;
  opacity: 0.8;
  font-size: 0.75rem;
}

.output-line .label {
  font-weight: 600;
  white-space: nowrap;
}

.output-line .message {
  color: #a8e6cf;
  word-break: break-word;
}

.output-line.indent {
  padding-left: 2rem;
}

.output-line.indent .message {
  color: #7fdbda;
}

/* Responsive */
@media (max-width: 968px) {
  .code-display {
    grid-template-columns: 1fr;
  }
  
  .output-preview {
    order: -1;
  }
}

@media (max-width: 768px) {
  .code-tabs {
    gap: 0.5rem;
  }
  
  .tab-label {
    display: none;
  }
  
  .window-content {
    padding: 1rem;
  }
  
  .output-content {
    padding: 1rem;
    font-size: 0.75rem;
  }
}
</style>
