type ColorValue = `#${string}`

type Colors = Record<ColorName, string>

export type ColorName =
  | "highlight"
  | "neutral"
  | "black"
  | "neutralDarkest"
  | "gray"
  | "background"
  | "surface"
  | "border"
  | "textMuted"
  | "textSubtle"
  | "highlightSoft"

export const colors: Colors = {
  highlight: "#006FFD",
  neutral: "#FFFFFF",
  black: "#000000",
  neutralDarkest: "#C5C6CC",
  gray: "#8F9098",
  background: "#F7F8FA",
  surface: "#FFFFFF",
  border: "#E6E8EC",
  textMuted: "#6B7280",
  textSubtle: "#9CA3AF",
  highlightSoft: "#CBE3FF",
}
