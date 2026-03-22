<template>
  <div class="app">
    <HeroSection />
    <FeaturesSection />
    <CodeSection />
    <InstallSection />
    <FooterSection />
  </div>
</template>

<script setup>
// Sections are auto-imported by Nuxt
import "../assets/css/main.css";
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
