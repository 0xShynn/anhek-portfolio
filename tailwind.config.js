const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#214ECF',
        primary_medium: '#5285ff',
        primary_light: '#bbd2ff',
        secondary: '#C7FF84',
        secondary_light: '#E5FEC7',
        secondary_dark: '#394726',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      letterSpacing: {
        widy: '0.010em',
      },
      fontSize: {
        '1xl': '1.35rem',
        '2.5xl': '1.65rem',
      },
      fontFamily: {
        body: [
          'Overpass',
          ...defaultTheme.fontFamily.sans,
        ],
        header: [
          'Work Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    }
  },
  variants: {},
  plugins: []
}
