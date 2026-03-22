<template>
  <section :id="id" class="mb-16 scroll-mt-24">
    <h2 class="font-headline text-3xl font-bold text-white mb-6 pb-2 border-b border-outline-variant/20">
      {{ title }}
    </h2>
    <div class="prose prose-invert max-w-none">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
</style>
