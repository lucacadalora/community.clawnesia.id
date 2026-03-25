/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-host-grotesk)', "sans-serif"],
        sans: ['var(--font-plus-jakarta-sans)', "sans-serif"],
        ui: ["Inter", "sans-serif"],
      },
      colors: {
        claw: {
          coral: {
            DEFAULT: "#FF5A36",
            light: "#FF8A6B",
            dark: "#D43F1E",
          },
          lime: {
            DEFAULT: "#EFFE93",
            muted: "rgba(239, 254, 147, 0.2)",
          },
          dark: {
            DEFAULT: "#0A0909",
            surface: "#161414",
            elevated: "#221F1F",
          },
          text: {
            primary: "#FAFAFA",
            muted: "#A19D9D",
            strong: "#0A0909",
          },
        },
      },
      fontSize: {
        display: ["5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["1.75rem", { lineHeight: "1.3", letterSpacing: "normal" }],
        h5: ["1.5rem", { lineHeight: "1.4", letterSpacing: "normal" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", letterSpacing: "normal" }],
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "normal" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "normal" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
      backgroundImage: {
        "gradient-soft":
          "linear-gradient(135deg, rgba(255,90,54,0.16) 0%, rgba(239,254,147,0.18) 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0909 0%, #161414 100%)",
        "hero-glow":
          "conic-gradient(from 180deg at 50% 50%, rgba(255,90,54,0.2) 0deg, rgba(239,254,147,0.16) 180deg, rgba(255,90,54,0.2) 360deg)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "reveal-up": "revealUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 24px 60px rgba(0, 0, 0, 0.28)",
        "card-hover": "0 28px 72px rgba(0, 0, 0, 0.34)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 60px rgba(0, 0, 0, 0.32)",
        "glow-coral": "0 0 20px -5px rgba(255, 90, 54, 0.5)",
        "glow-lime": "0 0 20px -5px rgba(239, 254, 147, 0.5)",
      },
      transitionTimingFunction: {
        framer: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        container: "1200px",
        wide: "1400px",
      },
    },
  },
  plugins: [],
};
