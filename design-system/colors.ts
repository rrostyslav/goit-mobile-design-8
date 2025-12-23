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
  | "danger"
  | "dangerBorder"
  | "dangerSoft"
  | "textPlaceholder"
  | "surfaceMuted"
  | "textPrimary"

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
  danger: "#B00020",
  dangerBorder: "#F5C2C7",
  dangerSoft: "#FDECEC",
  textPlaceholder: "#9A9AA0",
  surfaceMuted: "#F6F7F9",
  textPrimary: "#1C1C1E",
}
