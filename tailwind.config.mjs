/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0fdf9',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#2A9D8F', // Brand green
            600: '#0f766e',
            700: '#0d9488',
            800: '#115e59',
            900: '#134e4a',
          },
          dark: {
            primary: '#0B1426', // Deep cosmic blue
            secondary: '#1A1D29', // Rich dark navy
          },
          accent: {
            gold: '#F4A261', // Warm highlights
          },
          text: {
            primary: '#FFFFFF', // Pure white
            secondary: '#E8E8E8', // Soft gray
          }
        },
        fontFamily: {
          'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
          'heading': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        },
        fontSize: {
          'hero': ['4rem', { lineHeight: '1.1' }],
          'hero-mobile': ['2.5rem', { lineHeight: '1.2' }],
          'section': ['3rem', { lineHeight: '1.2' }],
          'section-mobile': ['2rem', { lineHeight: '1.3' }],
        },
    },
  },
  plugins: [],
}
