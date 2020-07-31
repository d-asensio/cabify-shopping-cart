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

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto minmax(auto, 312px);

  width: 100%;
  height: 100%;
`
function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IconsSprite />
      <Modal>
        <Wrapper as='main'>
          <ShoppingCart />
          <OrderSummary />
        </Wrapper>
      </Modal>
    </ThemeProvider>
  )
}

export default App
