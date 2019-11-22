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
        secondary: '#FFDD03',
        secondary_dark: '#C7FF84',
        tertiary: '#191E26',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      },      
    }
  },
  variants: {},
  plugins: []
}
