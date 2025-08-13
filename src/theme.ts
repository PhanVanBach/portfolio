export const theme = {
  colors: {
    bg: '#0d1117',
    surface: '#11161d',
    surfaceAlt: '#0f141b',
    text: '#e6edf3',
    textDim: '#9aa7b2',
    accent: '#00d1b2',
    accentSoft: '#00d1b21a',
    border: '#1f2937',
    chip: '#131a22',
    chipBorder: '#1f2a34',
    danger: '#ff6b6b'
  },
  radii: {
    xl: '1.25rem',
    lg: '1rem',
    md: '0.75rem',
    sm: '0.5rem',
    round: '999px'
  },
  shadow: {
    soft: '0 6px 24px rgba(0,0,0,.25)',
    inset: 'inset 0 0 0 1px rgba(255,255,255,.02)'
  },
  fonts: {
    display: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji'
  },
  container: '1200px'
} as const

export type AppTheme = typeof theme
