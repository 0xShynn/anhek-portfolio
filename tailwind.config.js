const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    fontFamily: {
      body: [
        'Fira Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      header: [
        'Work Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        primary: '#214ECF',
        secondary: '#C7FF84',
        secondary_light: '#E5FEC7', 
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      letterSpacing: {
        widy: '0.010em',
      },   
    }
  },
  variants: {},
  plugins: []
}
