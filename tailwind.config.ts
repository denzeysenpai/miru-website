import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        surface: {
          DEFAULT: '#131313',
          dim: '#131313',
          bright: '#393939',
          container: {
            lowest: '#0e0e0e',
            low: '#1c1b1b',
            DEFAULT: '#201f1f',
            high: '#2a2a2a',
            highest: '#353534'
          },
          variant: '#353534'
        },
        primary: {
          DEFAULT: '#ffffff',
          fixed: {
            DEFAULT: '#00fbfb',
            dim: '#00dddd'
          }
        },
        secondary: {
          DEFAULT: '#6fd7d6',
          fixed: {
            DEFAULT: '#8cf3f3',
            dim: '#6fd7d6'
          }
        },
        tertiary: {
          DEFAULT: '#ffffff',
          fixed: {
            DEFAULT: '#fce442',
            dim: '#dec723'
          }
        },
        outline: {
          DEFAULT: '#839493',
          variant: '#3a4a49'
        },
        error: '#ffb4ab'
      }
    }
  },
  plugins: []
} satisfies Config
