/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#F6FAF8",
          100: "#EAF2EE",
          200: "#DCEAE4",
          300: "#C6DED4",
        },
        teal: {
          800: "#1E403C",
          900: "#152E2B",
          950: "#0F2220",
        },
        brass: {
          400: "#C9A876",
          500: "#B99459",
          600: "#9C7A44",
        },
        ink: {
          DEFAULT: "#16231F",
          soft: "#3E5A53",
          faint: "#6E8A82",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(15, 34, 32, 0.25)",
        card: "0 10px 30px -12px rgba(15, 34, 32, 0.18)",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
