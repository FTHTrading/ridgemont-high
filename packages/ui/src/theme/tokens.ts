/*
 * Ridgemont AI Academy — Design Tokens
 *
 * The visual system blends 80s neon and 90s mall/arcade/VHS aesthetic
 * with modern restraint. Premium, clean, fast — not cluttered or kitschy.
 *
 * This file defines the Tailwind CSS theme extension.
 * Import into tailwind.config.ts to apply globally.
 */

export const ridgemontColors = {
  // Primary palette
  neonMagenta: {
    DEFAULT: "#FF2D78",
    50: "#FFF0F5",
    100: "#FFD6E7",
    200: "#FFADD2",
    300: "#FF7EB3",
    400: "#FF4F94",
    500: "#FF2D78",
    600: "#E6145E",
    700: "#B80D49",
    800: "#8A0A37",
    900: "#5C0725",
  },
  electricBlue: {
    DEFAULT: "#00BFFF",
    50: "#E6F9FF",
    100: "#B3EDFF",
    200: "#80E1FF",
    300: "#4DD5FF",
    400: "#1AC9FF",
    500: "#00BFFF",
    600: "#0099CC",
    700: "#007399",
    800: "#004D66",
    900: "#002633",
  },
  warmGold: {
    DEFAULT: "#FFB800",
    50: "#FFF8E6",
    100: "#FFEDB3",
    200: "#FFE180",
    300: "#FFD64D",
    400: "#FFCA1A",
    500: "#FFB800",
    600: "#CC9300",
    700: "#996E00",
    800: "#664A00",
    900: "#332500",
  },
  // Neutrals
  offBlack: {
    DEFAULT: "#0D0D12",
    50: "#E8E8EA",
    100: "#C5C5C9",
    200: "#9B9BA2",
    300: "#71717B",
    400: "#47475A",
    500: "#2A2A3A",
    600: "#1A1A28",
    700: "#141420",
    800: "#0F0F18",
    900: "#0D0D12",
  },
  paperCream: {
    DEFAULT: "#FDF6EC",
    50: "#FDF6EC",
    100: "#FAF0DD",
    200: "#F5E3C6",
    300: "#F0D6AE",
    400: "#EBC997",
    500: "#E6BC80",
  },
  cassetteGray: {
    DEFAULT: "#3A3A4A",
    50: "#ECECEF",
    100: "#D4D4DA",
    200: "#A9A9B5",
    300: "#7E7E90",
    400: "#5C5C70",
    500: "#3A3A4A",
    600: "#2E2E3B",
    700: "#23232D",
    800: "#17171E",
    900: "#0C0C0F",
  },
  // Accents
  arcadeGreen: {
    DEFAULT: "#39FF14",
    50: "#EDFFD6",
    100: "#D4FFAD",
    200: "#AAFF70",
    300: "#80FF42",
    400: "#58FF28",
    500: "#39FF14",
    600: "#2ECC10",
    700: "#22990C",
    800: "#176608",
    900: "#0B3304",
  },
  vhsPurple: {
    DEFAULT: "#9B59D0",
    50: "#F3EAFB",
    100: "#E0CBF5",
    200: "#C89FEB",
    300: "#B073E1",
    400: "#A566D8",
    500: "#9B59D0",
    600: "#7C47A6",
    700: "#5D357D",
    800: "#3E2453",
    900: "#1F122A",
  },
} as const;

export const ridgemontFonts = {
  heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
  body: ["'Inter'", "system-ui", "sans-serif"],
  mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
  display: ["'Audiowide'", "'Space Grotesk'", "sans-serif"],
} as const;

export const ridgemontShadows = {
  neonMagenta: "0 0 20px rgba(255, 45, 120, 0.4), 0 0 60px rgba(255, 45, 120, 0.1)",
  neonBlue: "0 0 20px rgba(0, 191, 255, 0.4), 0 0 60px rgba(0, 191, 255, 0.1)",
  neonGreen: "0 0 20px rgba(57, 255, 20, 0.4), 0 0 60px rgba(57, 255, 20, 0.1)",
  neonGold: "0 0 20px rgba(255, 184, 0, 0.4), 0 0 60px rgba(255, 184, 0, 0.1)",
  card: "0 4px 24px rgba(0, 0, 0, 0.25)",
  cardHover: "0 8px 40px rgba(0, 0, 0, 0.35)",
} as const;

export const ridgemontAnimation = {
  scanline: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(100vh)" },
  },
  glowPulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.6" },
  },
  slideUp: {
    "0%": { transform: "translateY(20px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
} as const;

/** Tailwind theme extension — merge into tailwind.config.ts */
export const ridgemontThemeExtension = {
  colors: {
    ridgemont: ridgemontColors,
    // Map to semantic tokens
    primary: ridgemontColors.neonMagenta,
    secondary: ridgemontColors.electricBlue,
    accent: ridgemontColors.warmGold,
    surface: ridgemontColors.offBlack,
    muted: ridgemontColors.cassetteGray,
    success: ridgemontColors.arcadeGreen,
  },
  fontFamily: ridgemontFonts,
  boxShadow: {
    "neon-magenta": ridgemontShadows.neonMagenta,
    "neon-blue": ridgemontShadows.neonBlue,
    "neon-green": ridgemontShadows.neonGreen,
    "neon-gold": ridgemontShadows.neonGold,
    card: ridgemontShadows.card,
    "card-hover": ridgemontShadows.cardHover,
  },
  keyframes: ridgemontAnimation,
  animation: {
    scanline: "scanline 8s linear infinite",
    "glow-pulse": "glowPulse 3s ease-in-out infinite",
    "slide-up": "slideUp 0.5s ease-out",
    "fade-in": "fadeIn 0.3s ease-out",
  },
} as const;
