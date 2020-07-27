import React from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css
} from 'styled-components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export const theme = () => ({
  white,
  black,

  grids: {
    sm: 8,
    md: 12,
    lg: 24
  },

  // background
  backgroundColor: white,

  // base text
  textColor: black,

  // media queries
  mediaWidth: mediaWidthTemplates
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
}

export const GlobalStyle = createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body > div {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
html {
  font-size: 16px;
  font-variant: none;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-hightlight-color: rgba(0, 0, 0, 0);
}
`
