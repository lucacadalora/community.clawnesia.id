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
        ui: ['var(--font-plus-jakarta-sans)', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF8F50",
          hover: "#E87B3E",
        },
        cream: {
          DEFAULT: "#FDFCF9",
          card: "#FFFFFF",
        },
        slate: {
          DEFAULT: "#221F1E",
          card: "#2A2625",
        },
        sand: {
          DEFAULT: "#F3EFE9",
          grid: "#EBE5DF",
        },
        carbon: {
          DEFAULT: "#1C1A19",
        },
        stone: {
          DEFAULT: "#5E5955",
          muted: "#8E8782",
        },
        terracotta: {
          bg: "#FFEBE0",
          DEFAULT: "#C25E20",
        },
        success: {
          DEFAULT: "#45B168",
        },
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        eyebrow: "0.05em",
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
        "dot-grid":
          "radial-gradient(circle, rgba(235,229,223,0.95) 1px, transparent 1px)",
        "dot-grid-dark":
          "radial-gradient(circle, rgba(54,50,48,0.9) 1px, transparent 1px)",
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
        card: "0px 12px 32px rgba(45,41,38,0.04)",
        btn: "0px 10px 24px rgba(255,143,80,0.24)",
        "btn-hover": "0px 14px 28px rgba(255,143,80,0.32)",
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
