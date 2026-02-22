import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Deep Teal
        teal: {
          50: '#f0fdfc',
          100: '#ccfbf8',
          200: '#99f6f0',
          300: '#5ee9dc',
          400: '#2cd4c5',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Warm Accent - Amber/Coral
        warm: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f0a868',
          500: '#e8985a',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Neutral - Slate with warmth
        stone: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d4cec4',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(20, 184, 166, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(240, 168, 104, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(20, 184, 166, 0.1) 0px, transparent 50%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,249,247,0.9) 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 50px -20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px -10px rgba(20, 184, 166, 0.3)',
        'warm': '0 4px 20px -5px rgba(240, 168, 104, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
