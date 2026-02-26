export const noirTheme = {
  colors: {
    bg0: "#070b11",
    bg1: "#0c131d",
    bg2: "#111b28",
    text0: "#e7edf8",
    text1: "#b9c4d3",
    text2: "#8a97aa",
    glass: "rgba(255,255,255,0.04)",
    line: "rgba(255,255,255,0.12)",
    accent: "#f36f20"
  },
  shadows: {
    deep: "0 24px 60px rgba(0,0,0,0.5)"
  },
  blur: {
    glass: "24px"
  }
} as const;

export type NoirTheme = typeof noirTheme;
