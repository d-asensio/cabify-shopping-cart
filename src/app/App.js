import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import {
  Modal,
  ShoppingCart,
  OrderSummary
} from './components'

import {
  GlobalStyle,
  IconsSprite,
  theme
} from './styles'

const Wrapper = styled(Modal)`
  display: grid;
  grid-template-columns: auto minmax(auto, 312px);
`
function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IconsSprite />
      <Wrapper as='main'>
        <ShoppingCart />
        <OrderSummary />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
