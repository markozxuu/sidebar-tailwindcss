module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    theme: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      extend: {
        colors: {
          'gray-vercel': '#888',
          'red-vercel': '#ee0000',
        },
        height: {
          70: '20rem',
        },
      },
    },
    variants: {},
    plugins: [],
  };
