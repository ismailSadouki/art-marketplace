/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      md: '834px',
      lg: '1280px',
    },
    extend: {
      colors: {
       secondary: '#3B3B3B',
        'purple': {
          550: '#9542FF',
        },
		  'zinc': {
			  350: '#A6A6A6',
		  }
      },
      left: {
        'vh': '50px'
      },
      transitionDuration: {
        '650': '650ms'
      },
      borderRadius: {
        '20': '20px'
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
      },
      fontSize: {
        h1: '28px',
        h2: '22px',
      },
      backgroundImage: {
        'nft-heighlight': "linear-gradient(180deg, rgba(162, 89, 255, 0.00) 25%, #A259FF 100%)",
        'secondary': '#3B3B3B'
      },
      lineHeight: {
        '110': '110%',
        '120': '120%',
        '140': '140%',
        '160': '160%',
      }
    },
  },
  plugins: [],
}

