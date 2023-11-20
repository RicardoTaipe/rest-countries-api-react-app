import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          1:'hsl(var(--color-primary1) / <alpha-value>)',
          2:'hsl(var(--color-primary2) / <alpha-value>)',
        },
        accent:{
          1:'hsl(var(--color-accent1) / <alpha-value>)',
          2:'hsl(var(--color-accent2) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [],
}
export default config
