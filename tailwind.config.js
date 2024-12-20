/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Martian Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          700: 'var(--neutral-700)',
          900: 'var(--neutral-900)',
        },
        salmon: {
          50: 'var(--salmon-50)',
          100: 'var(--salmon-100)',
          500: 'var(--salmon-500)',
        },
      },
      // transition for hover bg-gradient
      transitionProperty: {
        'bg-gradient': 'background-image',
        // to use this transition, add bg-gradient to the class
        // to add a transition duration, add duration-500 to the class
      },
      backgroundImage: {
        'text-gradient':
          'linear-gradient(107deg, #ff9a60 -11.37%, #062630 61.84%)',
        'gradient-2': 'linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%);',
        'gradient-3':
          'linear-gradient(90deg, var(--neutral-700) 0%, var(--neutral-900) 100%);',
      },
    },
    plugins: [],
  },
}
