/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class', // Active le mode sombre avec la classe 'dark'
  theme: {
    extend: {
      colors: {
        'light-gray': '#F3F4F6',
        gray: '#D1D5DB',
        'dark-gray': '#6B7280',
        dark: '#1D1D1D',
        yellow: '#F2D604',
        green: '#01B130',
        red: '#CB0101',
        blue: '#006EFF',
        'dark-2': '#0065EA',
        'dark-blue-1': '#171923',
        'dark-blue-2': '#292C3B',
      },
      fontFamily: {
        'mono-sans': [
          'SF Mono',
          'Fira Code',
          'Fira Mono',
          'Roboto Mono',
          'monospace',
        ],
      },
      fontSize: {
        xxs: ['10px', '12px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '32px'],
        '2xl': ['22px', '36px'],
        '3xl': ['24px', '40px'],
        '4xl': ['26px', '44px'],
      },
      boxShadow: {},
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
