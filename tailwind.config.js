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
        secondary: '#C7FF84',
        secondary_light: '#E5FEC7', 
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      },      
    }
  },
  variants: {},
  plugins: []
}
