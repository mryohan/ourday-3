/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)', /* pink-50 / custom dark purple */
        foreground: 'var(--color-foreground)', /* purple-900 / white with opacity */
        primary: {
          DEFAULT: 'var(--color-primary)', /* pink-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* pink-200 */
          foreground: 'var(--color-secondary-foreground)', /* purple-900 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* pink-400 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-100 / custom dark purple */
          foreground: 'var(--color-muted-foreground)', /* gray-500 / gray-400 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white / custom dark purple */
          foreground: 'var(--color-card-foreground)', /* purple-900 / white with opacity */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white / custom dark purple */
          foreground: 'var(--color-popover-foreground)', /* purple-900 / white with opacity */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Nunito Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      maxWidth: {
        'prose': '70ch',
      },
      ringWidth: {
        '3': '3px',
      },
      ringOffsetWidth: {
        '3': '3px',
      },
      transitionTimingFunction: {
        'romantic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'romantic': '250ms',
      },
      scale: {
        '97': '0.97',
      },
      zIndex: {
        '25': '25',
        '100': '100',
        '200': '200',
        '300': '300',
        '1000': '1000',
        '1100': '1100',
        '1200': '1200',
        '1300': '1300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}