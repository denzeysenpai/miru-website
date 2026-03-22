<template>
  <div class="rounded-lg overflow-hidden border border-outline-variant/20 bg-surface-container-lowest my-4">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-2 bg-surface-container border-b border-outline-variant/10">
      <div class="flex items-center gap-2">
        <span class="text-xs font-headline text-on-surface-variant uppercase tracking-wider">{{ language }}</span>
      </div>
      <button 
        @click="copyCode" 
        class="text-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors flex items-center gap-1"
      >
        <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>
    
    <!-- Code Content -->
    <pre class="p-4 overflow-x-auto"><code class="font-mono text-sm leading-relaxed" :class="codeClass">{{ displayedCode }}</code></pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  language: {
    type: String,
    default: 'text'
  },
  code: {
    type: String,
    required: true
  }
});

const copied = ref(false);

const codeClass = computed(() => {
  const classes = {
    go: 'text-on-surface',
    bash: 'text-primary-fixed-dim',
    text: 'text-on-surface-variant'
  };
  return classes[props.language] || classes.text;
});

const displayedCode = computed(() => {
  return props.code;
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<style scoped>
/* Custom scrollbar for code blocks */
pre::-webkit-scrollbar {
  height: 8px;
}

pre::-webkit-scrollbar-track {
  background: #1c1b1b;
}

pre::-webkit-scrollbar-thumb {
  background: #3a4a49;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #839493;
}
</style>
