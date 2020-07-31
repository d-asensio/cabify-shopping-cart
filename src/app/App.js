import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  GlobalStyle,
  IconsSprite,
  theme
} from './styles'

import { MainView, ProductView } from './components'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IconsSprite />
      <>
        <MainView />
        <ProductView />
      </>
    </ThemeProvider>
  )
}

export default App
