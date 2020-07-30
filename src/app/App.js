import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import {
  Dialog,
  ShoppingCart,
  OrderSummary
} from './components'

import {
  genericStyle
} from './styles'

const GlobalStyle = createGlobalStyle`
  ${genericStyle}

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-image: url("../images/background.png");
    background-color: #212240;
    background-position: center;
    background-size: cover;
  }
`

const Wrapper = styled(Dialog)`
  display: grid;
  grid-template-columns: auto minmax(auto, 312px);
`
function App () {
  return (
    <>
      <GlobalStyle />
      <Wrapper as='main'>
        <ShoppingCart />
        <OrderSummary />
      </Wrapper>
    </>
  )
}

export default App
