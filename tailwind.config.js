module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  darkMode: 'class', // Enable dark mode based on a class
  
  theme: {
    extend: {
      colors: {
        // Custom dark mode colors
        background: {
          DEFAULT: '#1a202c', // Dark background color
        },
        text: {
          DEFAULT: '#f7fafc', // Light text color for dark mode
        },
      },
    },
  },
  
  variants: {
    extend: {},
  },
  
  plugins: [],
};
