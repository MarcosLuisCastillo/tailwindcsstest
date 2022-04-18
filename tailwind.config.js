const colors = require('./node_modules/tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],

  theme: {
    colors: { 
    },
    extend: {},
  },
  plugins: [
    require('postcss-import'),
		require('postcss-url'),
		require('tailwindcss'),
		require('precss'),
  ],
};
