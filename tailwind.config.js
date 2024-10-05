module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  darkMode: 'class', // Set to 'class' to enable dark mode based on a class
  
  theme: {
    extend: {
      colors: {
        // Define your dark mode colors here, if needed
        background: {
          DEFAULT: '#1a202c', // Example dark background color
        },
        text: {
          DEFAULT: '#f7fafc', // Example light text color for dark mode
        },
      },
    },
  },
  
  variants: {
    extend: {},
  },
  
  plugins: [],
};
