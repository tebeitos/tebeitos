/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mostaza:   '#E8A01B',
        rojo:      '#E1352A',
        terracota: '#C44B2E',
        negro:     '#1B1714',
        crema:     '#F3E9D2',
        hueso:     '#FBF3E2',
        trama:     '#CBB892',
      },
      fontFamily: {
        bangers:  ['Bangers', 'cursive'],
        fredoka:  ['Fredoka One', 'cursive'],
        nunito:   ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'comic':      '4px 4px 0px #1B1714',
        'comic-lg':   '6px 6px 0px #1B1714',
        'comic-sm':   '2px 2px 0px #1B1714',
        'comic-rojo': '4px 4px 0px #E1352A',
      },
      borderWidth: {
        '3': '3px',
      },
      letterSpacing: {
        'bangers': '0.05em',
      },
    },
  },
  plugins: [],
};
