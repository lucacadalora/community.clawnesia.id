# Clawnesia Build Design System

A comprehensive design system harmonizing OpenClaw's official brand with Clawnesia Build's premium, community-driven identity.

## 1. Brand & Color Analysis

**OpenClaw Coral (`#FF5A36`)**
- **Psychology**: Urgent, energetic, passionate, authoritative.
- **Vibe**: Developer-focused, precise, "infrastructure".
- **Usage in Docs**: Primary action, active states, brand signifier.

**Clawnesia Neon Lime (`#EFFE93`)**
- **Psychology**: Fresh, modern, electric, approachable, "wealth/growth" (appealing to entrepreneurs/UMKM).
- **Vibe**: Web3, premium Framer sites, "the future is now", trendy AI tooling.
- **Usage in Web**: High-contrast pop against pure dark backgrounds, gradient meshes.

**The Relationship**: 
Coral (Red-Orange) and Neon Lime (Yellow-Green) sit apart on the color wheel, acting as a striking near-complementary/split-complementary pair. If used together at 100% saturation, they vibrate and compete. However, if one is used as the dominant structural color and the other as a hyper-accent, they create a highly premium, modern "AI Agency" aesthetic.

---

## 2. Typography Recommendations

To achieve the "$15K Framer site" aesthetic while maintaining readability for Indonesian entrepreneurs:

- **Primary/Display (Headings)**: **Host Grotesk** 
  - *Keep this.* It has wide, confident geometry that screams "modern tech startup." Use tight letter-spacing (`-0.02em`) for massive hero text.
- **Secondary/Body**: **Plus Jakarta Sans** (Replaces Hedvig Letters Sans)
  - *Why?* It's literally named after Indonesia's capital, highly optimized for screens, slightly wider than Inter, and feels incredibly premium. It bridges the gap between approachable and technical.
- **Monospace/UI/Code**: **Inter** or **JetBrains Mono**
  - Use for badges, micro-copy, and code blocks to maintain the developer tie to OpenClaw.

---

## 3. Component Patterns

To hit the premium buildclub.ai / belajargpt.com benchmark:

- **Backgrounds**: Deep space dark (`#0A0A0A` to `#0E0C0D`), avoiding pure black (`#000000`) to reduce eye strain. Use large, highly blurred gradient orbs (500px blur) in the background.
- **Cards**: "Glass-dark" surfaces. Background `rgba(255, 255, 255, 0.03)`, with a `1px solid rgba(255, 255, 255, 0.08)` border. Inner drop shadows for depth.
- **Buttons**:
  - *Primary*: Glow effects. Solid background with a subtle drop shadow in the same color (e.g., `box-shadow: 0 0 20px rgba(255, 90, 54, 0.4)`).
  - *Secondary*: Transparent with a 1px border and a subtle hover fill.
- **Gradients**: Text gradients on H1 hero sections (e.g., fading from White to Dark Gray, or Lime to Cyan, or Coral to Orange).

---

## 4. Visual Identity Options

Below are 3 distinct paths for Clawnesia Build's visual relationship with OpenClaw.

### Option A: The Independent (Lime Primary)
*Positioning: Clawnesia as an independent, trendy community that happens to teach OpenClaw.*

- **Mood**: Electric, native AI, Gen-Z/Millennial entrepreneur, high-energy.
- **Reasoning**: Lime `#EFFE93` is the current darling of premium Framer sites. It stands out instantly. It feels like "money and growth."
- **Palette**:
  - Primary: `#EFFE93` (Lime)
  - Primary Hover: `#D4E666`
  - Surface Dark: `#121212`
  - Surface Light (Cards): `#1E1E1E`
  - Accent: `#FFFFFF`

### Option B: The Child Brand (Coral Primary)
*Positioning: Clawnesia as the official "Indonesian Wing" of OpenClaw.*

- **Mood**: Authoritative, developer-centric, trustworthy, institutional.
- **Reasoning**: Adopting OpenClaw's exact `#FF5A36` builds immediate trust. It tells the user "we are the definitive source for this." 
- **Palette**:
  - Primary: `#FF5A36` (OpenClaw Coral)
  - Primary Hover: `#FF8A6B`
  - Surface Dark: `#0E0C0D` (OpenClaw standard)
  - Surface Light (Cards): `#1A1819`
  - Accent: `#1976D2` (OpenClaw Blue)

### Option C: The Hybrid Co-Brand (Recommended)
*Positioning: A localized powerhouse. OpenClaw's engine, Clawnesia's community.*

- **Mood**: Premium, cutting-edge, dynamic.
- **Reasoning**: We use OpenClaw's Coral for primary conversions (Buy, Deploy, Start) because it drives urgency. We use Clawnesia's Lime for highlights, badges, and success states (Learning, Community, Growth). This satisfies both the "official" feel and the "premium Framer" feel.
- **Palette**:
  - Primary Action: `#FF5A36` (Coral - for CTAs)
  - Brand Accent: `#EFFE93` (Lime - for badges, highlights, glowing orbs)
  - Background: `#0A0909` (Ultra dark warm gray)
  - Surface: `#161414`
  - Text Primary: `#FAFAFA`
  - Text Muted: `#A19D9D`

---

## 5. CSS Custom Properties (Option C: Hybrid)

```css
:root {
  /* Core Colors */
  --color-brand-coral: #FF5A36;
  --color-brand-coral-light: #FF8A6B;
  --color-brand-coral-dark: #D43F1E;
  
  --color-brand-lime: #EFFE93;
  --color-brand-lime-muted: rgba(239, 254, 147, 0.2);
  
  /* Dark Mode Surfaces (Default) */
  --bg-main: #0A0909;
  --bg-surface: #161414;
  --bg-surface-elevated: #221F1F;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: var(--color-brand-coral);

  /* Text */
  --text-primary: #FAFAFA;
  --text-secondary: #A19D9D;
  --text-on-coral: #FFFFFF;
  --text-on-lime: #0A0909;

  /* Typography */
  --font-display: 'Host Grotesk', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', 'Inter', monospace;
}

/* Light Mode Overrides (if needed, though Dark Mode is recommended) */
[data-theme='light'] {
  --bg-main: #FFFFFF;
  --bg-surface: #F5F5F5;
  --bg-surface-elevated: #EAEAEA;
  --border-subtle: rgba(0, 0, 0, 0.1);
  --text-primary: #121212;
  --text-secondary: #555555;
}
```

---

## 6. Tailwind Configuration (Option C: Hybrid)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        claw: {
          coral: {
            DEFAULT: '#FF5A36',
            light: '#FF8A6B',
            dark: '#D43F1E',
          },
          lime: {
            DEFAULT: '#EFFE93',
            muted: '#D4E666',
            glow: 'rgba(239, 254, 147, 0.2)',
          },
          dark: {
            DEFAULT: '#0A0909',
            surface: '#161414',
            elevated: '#221F1F',
          }
        }
      },
      fontFamily: {
        display: ['Host Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #FF5A3633 0deg, #EFFE9333 180deg, #FF5A3633 360deg)',
      },
      boxShadow: {
        'glow-coral': '0 0 20px -5px rgba(255, 90, 54, 0.5)',
        'glow-lime': '0 0 20px -5px rgba(239, 254, 147, 0.5)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
```
