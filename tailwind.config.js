module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#010C1C',
      'background-2': '#F1F5FF',
      'primary': '#2540BB',
      'white': '#FFFFFF',
      'transparent': 'rgba(0,0,0,0)',
    },
    fontFamily: {
      'primary': ['"Poppins"', 'sans-serif'],
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
