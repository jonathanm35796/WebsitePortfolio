import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'profile-entrance': {
          '0%': { transform: 'translateY(-100%) translateX(0)', opacity: '0' },
          '60%': { transform: 'translateY(20%) translateX(0)' },
          '80%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: '1' }
        }
      },
      animation: {
        'profile-entrance': 'profile-entrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    },
  },
  plugins: [],
} satisfies Config;
