/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      height: {
        "102": "28rem"
      },
      keyframes: {
        'custom-bounce': {
          '0% 100%' : {transform: 'translateY(0)'},
          '25% 75%' : {transform: 'translateY(-5)'},
          '50%': {transform: 'translateY(-10px)'}, // バウンスの幅を小さく
        },
      },
      animation : {
        "slow-bounce": "custom-bounce ease-in-out 5s infinite"
      },
    },
  },
  plugins: [],
}

