/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        /* Button CTA */
        "button-cta-primary": "var(--button-cta-primary)",
        "button-cta-primary-foreground": "var(--button-cta-primary-foreground)",
        "button-cta-secondary": "var(--button-cta-secondary)",
        "button-cta-secondary-foreground":
          "var(--button-cta-secondary-foreground)",

        /* Background Primary */
        "background-primary": "var(--background-primary)",
        "background-primary-foreground": "var(--background-primary-foreground)",
        "background-primary-muted": "var(--background-primary-muted)",
        "collapsable-primary": "var(--collapsable-primary)",

        /* Background Secondary */
        "background-secondary": "var(--background-secondary)",
        "background-secondary-foreground":
          "var(--background-secondary-foreground)",
        "background-secondary-muted": "var(--background-secondary-muted)",
        "collapsable-secondary": "var(--collapsable-secondary)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
