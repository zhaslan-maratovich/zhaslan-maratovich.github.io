module.exports = {
  content: [
    './**/*.html',
    './assets/js/*.js',
  ],
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1320px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-green': '#536D52',
      black0: '#000',
      black: '#131816',
      text: '#5E5E58',
      'middle-grey': '#828278',
      grey: '#B7B8AF',
      inactive: '#D5D6CC',
      tone: '#F3F3EF',
      white: '#FFFEFA',
    },
    fontFamily: {
      display: ['Lora', 'serif'],
      body: ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      'mobile-t1': ['calc(16 * var(--page-zoom))', '1.4'],
      'mobile-t2': ['calc(14 * var(--page-zoom))', '1.55'],
      'mobile-t3': ['calc(12 * var(--page-zoom))', '1.4'],
      'mobile-h1': ['calc(40 * var(--page-zoom))', '1'],
      'mobile-h2': ['calc(32 * var(--page-zoom))', '1'],
      'mobile-h3': ['calc(32 * var(--page-zoom))', '1'],
      'mobile-h4': ['calc(24 * var(--page-zoom))', '1.15'],
      'mobile-h5': ['calc(16 * var(--page-zoom))', '1.2'],

      'desktop-t1': ['calc(20 * var(--page-zoom))', '1.4'],
      'desktop-t2': ['calc(16 * var(--page-zoom))', '1.55'],
      'desktop-t3': ['calc(14 * var(--page-zoom))', '1.4'],
      'desktop-h1': ['calc(90 * var(--page-zoom))', '0.9'],
      'desktop-h2': ['calc(60 * var(--page-zoom))', '1'],
      'desktop-h3': ['calc(48 * var(--page-zoom))', '1'],
      'desktop-h4': ['calc(28 * var(--page-zoom))', '1.15'],
      'desktop-h5': ['calc(18 * var(--page-zoom))', '1.2'],

      'display-38': ['calc(38 * var(--page-zoom))', '0.9'],
      'display-70': ['calc(70 * var(--page-zoom))', '0.9'],
      'display-90': ['calc(90 * var(--page-zoom))', '0.9'],
      'display-116': ['calc(116 * var(--page-zoom))', '0.9'],
      'display-140': ['calc(140 * var(--page-zoom))', '0.9'],
    },
    // spacing: {
    //   px: 'calc( * var(--page-zoom))',
    //   0: 'calc( * var(--page-zoom))',
    //   0.5: 'calc(0.125 * var(--page-zoom))',
    //   1: 'calc(0.25 * var(--page-zoom))',
    //   1.5: 'calc(0.375 * var(--page-zoom))',
    //   2: 'calc(0.5 * var(--page-zoom))',
    //   2.5: 'calc(0.625 * var(--page-zoom))',
    //   3: 'calc(0.75 * var(--page-zoom))',
    //   3.5: 'calc(0.875 * var(--page-zoom))',
    //   4: 'calc(1 * var(--page-zoom))',
    //   5: 'calc(1.25 * var(--page-zoom))',
    //   6: 'calc(1.5 * var(--page-zoom))',
    //   7: 'calc(1.75 * var(--page-zoom))',
    //   8: 'calc(2 * var(--page-zoom))',
    //   9: 'calc(2.25 * var(--page-zoom))',
    //   10: 'calc(2.5 * var(--page-zoom))',
    //   11: 'calc(2.75 * var(--page-zoom))',
    //   12: 'calc(3 * var(--page-zoom))',
    //   14: 'calc(3.5 * var(--page-zoom))',
    //   16: 'calc(4 * var(--page-zoom))',
    //   20: 'calc(5 * var(--page-zoom))',
    //   24: 'calc(6 * var(--page-zoom))',
    //   28: 'calc(7 * var(--page-zoom))',
    //   32: 'calc(8 * var(--page-zoom))',
    //   36: 'calc(9 * var(--page-zoom))',
    //   40: 'calc(10 * var(--page-zoom))',
    //   44: 'calc(11 * var(--page-zoom))',
    //   48: 'calc(12 * var(--page-zoom))',
    //   52: 'calc(13 * var(--page-zoom))',
    //   56: 'calc(14 * var(--page-zoom))',
    //   60: 'calc(15 * var(--page-zoom))',
    //   64: 'calc(16 * var(--page-zoom))',
    //   72: 'calc(18 * var(--page-zoom))',
    //   80: 'calc(20 * var(--page-zoom))',
    //   96: 'calc(24 * var(--page-zoom))',
    // },
    extend: {
      spacing: {
        75: '18.75rem', // 300px
        86: '21.5rem', // 344px
        90: '22.5rem', // 360px
        92: '23rem', // 368px
        98: '24.375rem', // 390px
        100: '25rem', // 400px
        105: '26.25rem', // 420px
        115: '28.75rem', // 460px
        120: '30rem', // 480px
        130: '32.5rem', // 520px
        132: '32.875rem', // 526px
        135: '33.75rem', // 540px
        140: '35rem', // 560px
        144: '36rem', // 576px
        146: '36.625rem', // 586px
        160: '40rem', // 640px
        182: '45.5rem', // 728px
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'select': 'width'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-1': {
          '@apply text-mobile-t1 lg:text-desktop-t1': {},
        },
        '.text-2': {
          '@apply text-mobile-t2 lg:text-desktop-t2': {},
        },
        '.text-3': {
          '@apply text-mobile-t3 lg:text-desktop-t3': {},
        },
        '.h1': {
          '@apply font-display text-mobile-h1 lg:text-desktop-h1': {},
        },
        '.h2': {
          '@apply font-display text-mobile-h2 lg:text-desktop-h2': {},
        },
        '.h3': {
          '@apply font-display text-mobile-h3 lg:text-desktop-h3': {},
        },
        '.h4': {
          '@apply font-display text-mobile-h4 lg:text-desktop-h4': {},
        },
        '.h5': {
          '@apply font-semibold text-mobile-h5 lg:text-desktop-h5': {},
        },
      })
    },
  ],
}
