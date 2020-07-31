import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  GlobalStyle,
  IconsSprite,
  theme
} from './styles'

import { MainView } from './components'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IconsSprite />
      <MainView />
    </ThemeProvider>
  )
}

export default App
