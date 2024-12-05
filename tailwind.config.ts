import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customblue: '#5E4CC9',
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradcol1: "#1C114D",
        gradcol2: "#3A2897",
        gradcol3: "#5642C5",
        gradcol4: "#A29EE8",
        grad2col1: "#150D38",
        grad2col2: "#2C1D73",
        grad2col3: "#5A48C4",
      },
      background: {
        radial: `url('./Bg_Ellipse2.svg') #fff`
      },
      screens: {
        'over-2000': '2000px',
        'over-1700': '1700px',
        'over-1300': '1300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
