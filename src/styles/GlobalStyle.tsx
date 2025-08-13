import { createGlobalStyle } from 'styled-components'
import { theme } from '../theme'

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; font-family: ${theme.fonts.display}; background: ${theme.colors.bg}; color: ${theme.colors.text}; }
  a { color: inherit; text-decoration: none; }
  img { display:block; max-width:100%; }
`
