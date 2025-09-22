/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
      extend: {
        colors: {
          primary: {
            50: '#fefff0',
            100: '#fcffe0',
            200: '#f7ffc2',
            300: '#eeff8d',
            400: '#c4f82a', // Brand green - more visible lime green
            500: '#a3e635',
            600: '#84cc16',
            700: '#65a30d',
            800: '#4d7c0f',
            900: '#365314',
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
