<template>
  <footer class="footer">
    <!-- Top Wave -->
    <div class="wave-top">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path 
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,0 L0,0 Z" 
          fill="#0d1b2a"
        />
      </svg>
    </div>

    <div class="footer-content">
      <div class="footer-main">
        <!-- Logo & Description -->
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">🦀</span>
            <span class="logo-text">miru</span>
          </div>
          <p class="footer-description">
            A Go debugger toolkit library for developers who value elegant debugging. 
            Structured panic recovery, logging, testing, and tracing with useful context.
          </p>
          <div class="footer-social">
            <a 
              href="https://github.com/denzeysenpai/miru" 
              target="_blank" 
              class="social-link"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer-links">
          <div class="link-group">
            <h4 class="link-title">Documentation</h4>
            <ul class="link-list">
              <li><a href="#install" class="link">Getting Started</a></li>
              <li><a href="#features" class="link">Features</a></li>
              <li><a href="#" class="link">API Reference</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4 class="link-title">Resources</h4>
            <ul class="link-list">
              <li><a href="https://github.com/denzeysenpai/miru" target="_blank" class="link">GitHub</a></li>
              <li><a href="#" class="link">Examples</a></li>
              <li><a href="#" class="link">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Attributions -->
      <div class="footer-attributions">
        <h4 class="attributions-title">Image Credits</h4>
        <div class="attribution-list">
          <div class="attribution-item">
            <span>Photo by </span>
            <a href="https://unsplash.com/@kugedo6060" target="_blank">Shigeki Wakabayashi</a>
            <span> on </span>
            <a href="https://unsplash.com" target="_blank">Unsplash</a>
          </div>
          <div class="attribution-item">
            <span>Photo by </span>
            <a href="https://unsplash.com/@mytinyatlas" target="_blank">Lin Mei</a>
            <span> on </span>
            <a href="https://unsplash.com" target="_blank">Unsplash</a>
          </div>
          <div class="attribution-item">
            <span>Photo by </span>
            <a href="https://unsplash.com/@moizk" target="_blank">Moiz K. Malik</a>
            <span> on </span>
            <a href="https://unsplash.com" target="_blank">Unsplash</a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ new Date().getFullYear() }} Miru. Released under the MIT License.
        </p>
        <p class="made-with">
          Made with 💙 for the Go community
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, #0891b2 0%, #0a1628 100%);
  color: white;
  padding: 6rem 2rem 2rem;
}

/* Wave */
.wave-top {
  position: absolute;
  top: -99px;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.wave-top svg {
  width: 100%;
  height: 100%;
}

/* Content */
.footer-content {
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

/* Brand */
.footer-brand {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--ocean-cyan) 0%, var(--ocean-mint) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  font-size: 0.9375rem;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: var(--ocean-cyan);
  transform: translateY(-2px);
}

/* Links */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ocean-cyan);
}

.link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--ocean-cyan);
  transition: width 0.3s ease;
}

.link:hover {
  color: white;
}

.link:hover::after {
  width: 100%;
}

/* Attributions */
.footer-attributions {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.attributions-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ocean-cyan);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.attribution-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.attribution-item {
  font-size: 0.8125rem;
  opacity: 0.7;
}

.attribution-item a {
  color: var(--ocean-mint);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.attribution-item a:hover {
  opacity: 1;
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright,
.made-with {
  font-size: 0.875rem;
  opacity: 0.6;
}

.made-with {
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 4rem 1.5rem 1.5rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .attribution-list {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
